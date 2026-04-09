import React, { useRef, useMemo } from 'react';
import { motion as Motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * Deterministic pseudo-random number generator (mulberry32)
 * so scatter positions are consistent across renders.
 */
function seededRandom(seed) {
  let t = (seed + 0x6D2B79F5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

/**
 * ScatterItem — wraps each child, scattering it from a random
 * off-screen position and animating it into its natural grid slot
 * as the parent container scrolls into view.
 */
const ScatterItem = ({ children, index, scrollProgress, intensity = 1 }) => {
  // Generate stable random offsets based on index
  const offsets = useMemo(() => {
    const r1 = seededRandom(index * 7 + 13);
    const r2 = seededRandom(index * 11 + 37);
    const r3 = seededRandom(index * 17 + 53);
    const r4 = seededRandom(index * 23 + 71);
    const r5 = seededRandom(index * 31 + 97);

    // Choose a random edge/corner to fly from
    const angle = r1 * Math.PI * 2;
    const distance = 600 + r2 * 800; // 600–1400px away

    return {
      x: Math.cos(angle) * distance * intensity,
      y: Math.sin(angle) * distance * intensity,
      rotate: (r3 - 0.5) * 360 * intensity, // -180 to 180 degrees
      scale: 0.1 + r4 * 0.4, // 0.1 to 0.5
      delay: r5 * 0.3, // stagger
    };
  }, [index, intensity]);

  // Map scroll progress → transform values
  const x = useTransform(scrollProgress, [0, 0.4, 0.8], [offsets.x, offsets.x * 0.1, 0]);
  const y = useTransform(scrollProgress, [0, 0.4, 0.8], [offsets.y, offsets.y * 0.1, 0]);
  const rotate = useTransform(scrollProgress, [0, 0.5, 0.85], [offsets.rotate, offsets.rotate * 0.05, 0]);
  const scale = useTransform(scrollProgress, [0, 0.4, 0.8], [offsets.scale, 0.85, 1]);
  const opacity = useTransform(scrollProgress, [0, 0.2, 0.6], [0, 0.6, 1]);

  // Smooth spring physics for natural movement
  const springConfig = { stiffness: 60 + index * 5, damping: 20, mass: 1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRotate = useSpring(rotate, springConfig);
  const springScale = useSpring(scale, springConfig);

  return (
    <Motion.div
      style={{
        x: springX,
        y: springY,
        rotate: springRotate,
        scale: springScale,
        opacity,
      }}
      className="will-change-transform"
    >
      {children}
    </Motion.div>
  );
};

/**
 * ScatterToGrid — wraps a grid of items, making them scatter
 * from random viewport positions and fly into grid slots on scroll.
 *
 * @param {React.ReactNode[]} children — array of grid item elements
 * @param {string} className — className for the grid container
 * @param {object} style — inline style for the grid container
 * @param {number} intensity — scatter distance multiplier (0.5=subtle, 1=normal, 1.5=extreme)
 * @param {string} scrollOffset — framer-motion scroll offset tuple
 */
const ScatterToGrid = ({
  children,
  className = '',
  style = {},
  intensity = 1,
  scrollOffset,
}) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: scrollOffset || ['start end', 'center center'],
  });

  return (
    <div ref={containerRef} className={className} style={style}>
      {React.Children.map(children, (child, index) => (
        <ScatterItem
          key={index}
          index={index}
          scrollProgress={scrollYProgress}
          intensity={intensity}
        >
          {child}
        </ScatterItem>
      ))}
    </div>
  );
};

export default ScatterToGrid;
