        import React, {useState, useRef} from 'react';
        import {motion as Motion, useScroll, useTransform, useSpring} from 'framer-motion';
        import ScatterToGrid from '../components/common/ScatterToGrid';
        import {
          FiCheck,
          FiDownload,
          FiSearch,
          FiChevronDown,
          FiChevronRight,
          FiMusic,
          FiImage,
          FiVideo,
          FiPenTool,
          FiMic,
          FiLayers,
          FiSmartphone,
          FiActivity,
          FiGrid,
          FiPlay,
          FiFilter,
          FiStar,
          FiHeart,
          FiBookmark,
} from 'react-icons/fi';
        import {BsStars, BsImage, BsCameraVideo, BsPlayFill} from 'react-icons/bs';
        import useDocumentTitle from '../hooks/useDocumentTitle';

const BrowsePage = () => {
          useDocumentTitle('Browse - Marketly Elements');

        const [searchValue, setSearchValue] = useState('');
        const [selectedCategory, setSelectedCategory] = useState('All Items');
        const [isFilterOpen, setIsFilterOpen] = useState(false);

        const heroRef = useRef(null);
        const {scrollYProgress} = useScroll({
          target: heroRef,
        offset: ["start start", "end start"]
  });

        const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
        const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
        const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

        const smoothHeroY = useSpring(heroY, {stiffness: 100, damping: 30 });

        // Simplified Animation Variants for Testing
        const simpleVariants = {
          initial: {opacity: 0.3, scale: 0.95 },
        whileInView: {opacity: 1, scale: 1 },
        transition: {duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

        // Optimized Parallax Animation Variants - From Corners and Sides
        const imageParallaxVariants = {
          fromTopLeft: {
          initial: {
          opacity: 0.1,
        x: -150,
        y: -150,
        scale: 0.7,
        rotate: -25,
        filter: "blur(8px)"
      },
        whileInView: {
          opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)"
      },
        transition: {
          duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    },
        fromTopRight: {
          initial: {
          opacity: 0.1,
        x: 150,
        y: -150,
        scale: 0.6,
        rotate: 25,
        filter: "blur(10px)"
      },
        whileInView: {
          opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)"
      },
        transition: {
          duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 70,
        damping: 25
      }
    },
        fromBottomLeft: {
          initial: {
          opacity: 0.1,
        x: -150,
        y: 150,
        scale: 0.8,
        rotate: 25,
        filter: "blur(6px)"
      },
        whileInView: {
          opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)"
      },
        transition: {
          duration: 1.0,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 90,
        damping: 18
      }
    },
        fromBottomRight: {
          initial: {
          opacity: 0.1,
        x: 150,
        y: 150,
        scale: 0.7,
        rotate: -25,
        filter: "blur(8px)"
      },
        whileInView: {
          opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)"
      },
        transition: {
          duration: 1.3,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 75,
        damping: 22
      }
    },
        fromLeftSide: {
          initial: {
          opacity: 0.2,
        x: -200,
        y: 0,
        scale: 0.8,
        rotate: -45,
        filter: "blur(5px)"
      },
        whileInView: {
          opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)"
      },
        transition: {
          duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 85,
        damping: 20
      }
    },
        fromRightSide: {
          initial: {
          opacity: 0.2,
        x: 200,
        y: 0,
        scale: 0.8,
        rotate: 45,
        filter: "blur(5px)"
      },
        whileInView: {
          opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)"
      },
        transition: {
          duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 85,
        damping: 20
      }
    },
        fromTopSide: {
          initial: {
          opacity: 0.15,
        x: 0,
        y: -200,
        scale: 0.6,
        rotate: 90,
        filter: "blur(12px)"
      },
        whileInView: {
          opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)"
      },
        transition: {
          duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 60,
        damping: 30
      }
    },
        fromBottomSide: {
          initial: {
          opacity: 0.2,
        x: 0,
        y: 200,
        scale: 0.9,
        rotate: -90,
        filter: "blur(4px)"
      },
        whileInView: {
          opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)"
      },
        transition: {
          duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
        spiralFromCorner: {
          initial: {
          opacity: 0.1,
        x: -250,
        y: -250,
        scale: 0.4,
        rotate: -180,
        filter: "blur(15px)"
      },
        whileInView: {
          opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)"
      },
        transition: {
          duration: 2.0,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 50,
        damping: 35
      }
    },
        diagonalSlide: {
          initial: {
          opacity: 0.15,
        x: 180,
        y: -180,
        scale: 0.7,
        rotate: 90,
        filter: "blur(8px)"
      },
        whileInView: {
          opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)"
      },
        transition: {
          duration: 1.3,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 75,
        damping: 25
      }
    }
  };

  // Function to get corner/side animation based on position
  const getCornerSideAnimation = (index) => {
    const animations = [
        'fromTopLeft', 'fromTopRight', 'fromBottomLeft', 'fromBottomRight',
        'fromLeftSide', 'fromRightSide', 'fromTopSide', 'fromBottomSide',
        'spiralFromCorner', 'diagonalSlide'
        ];
        return animations[index % animations.length];
  };

        const riseIn = {
          initial: {opacity: 0, y: 24 },
        whileInView: {opacity: 1, y: 0 },
        viewport: {once: true, margin: '-60px' },
        transition: {duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

        const staggerContainer = {
          initial: { },
        whileInView: {
          transition: {
          staggerChildren: 0.08,
      },
    },
  };

        const staggerItem = {
          initial: {opacity: 0, y: 20 },
        whileInView: {opacity: 1, y: 0 },
        transition: {duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  };

        /* â”€â”€ AI Tools Data â”€â”€ */
        const aiTools = [
        {name: 'VideoGen', icon: <FiVideo size={14} />, color: '#4ade80', seed: 'envato-videogen' },
        {name: 'ImageGen', icon: <FiImage size={14} />, color: '#4ade80', seed: 'envato-imagegen', hasPrompt: true },
        {name: 'ImageEdit', icon: <FiPenTool size={14} />, color: '#22d3ee', seed: 'envato-imageedit' },
        {name: 'VoiceGen', icon: <FiMic size={14} />, color: '#4ade80', seed: 'envato-voicegen' },
        {name: 'MusicGen', icon: <FiMusic size={14} />, color: '#f97316', seed: 'envato-musicgen' },
        {name: 'GraphicsGen', icon: <FiLayers size={14} />, color: '#a78bfa', seed: 'envato-graphicsgen' },
        {name: 'MockUpGen', icon: <FiSmartphone size={14} />, color: '#22d3ee', seed: 'envato-mockupgen' },
        {name: 'SoundGen', icon: <FiActivity size={14} />, color: '#60a5fa', seed: 'envato-soundgen' },
        ];

        /* â”€â”€ Enhanced Category Data with Real Envato-style Images â”€â”€ */
        const categories = [
        {
          title: 'Stock Video',
        count: '9.1M+',
        seed: 'stockvideo-nature',
        imgH: 200,
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
        {
          title: 'Video Templates',
        count: '150,000+',
        seed: 'video-template-motion',
        imgH: 280,
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
        {
          title: 'Stock Photos',
        count: '15.3M+',
        seed: 'stock-photography',
        imgH: 320,
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
        {
          title: 'Royalty-Free Music',
        count: '340,000+',
        seed: 'music-audio-waves',
        imgH: 280,
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
        {
          title: 'Sound Effects',
        count: '930,000+',
        seed: 'sound-effects-studio',
        imgH: 200,
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
        {
          title: 'Graphic Templates',
        count: '410,000+',
        seed: 'graphic-design-templates',
        imgH: 260,
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
        {
          title: 'Fonts',
        count: '76,000+',
        seed: 'typography-fonts',
        imgH: 240,
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
        {
          title: 'Graphics',
        count: '270,000+',
        seed: 'vector-graphics',
        imgH: 200,
        gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
    },
        {
          title: '3D',
        count: '380,000+',
        seed: '3d-models-render',
        imgH: 280,
        gradient: 'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)'
    },
        {
          title: 'Add-ons',
        count: '37,000+',
        seed: 'plugins-addons',
        imgH: 220,
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
        {
          title: 'Presentation Templates',
        count: '210,000+',
        seed: 'presentation-slides',
        imgH: 240,
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
        {
          title: 'All Categories',
        count: '27.3M+',
        seed: 'all-categories-mix',
        imgH: 200,
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
        ];

        /* â”€â”€ Enhanced Collections Data â”€â”€ */
        const collections = [
        {
          title: 'Dreamshift: Surreal design essentials',
        seed: 'surreal-dreamscape',
        types: ['brand', 'photo', 'video'],
        featured: true
    },
        {
          title: 'Thiccography',
        seed: 'bold-typography',
        types: ['brand'],
        featured: false
    },
        {
          title: 'Motion is Collective',
        seed: 'motion-graphics',
        types: ['photo', 'video'],
        featured: false
    },
        {
          title: "Gothic aesthetic in film: From 'Frankenstein' to 'Wuthering Heights'",
        seed: 'gothic-cinema',
        types: ['photo'],
        featured: false
    },
        ];

        /* â”€â”€ Trending Assets Data â”€â”€ */
        const trendingAssets = [
        {
          id: 1,
        title: 'Modern Corporate Presentation',
        author: 'DesignStudio',
        category: 'Presentation Templates',
        price: 'Free',
        downloads: '125K',
        rating: 4.8,
        image: 'https://picsum.photos/seed/trending-presentation/400/300',
        isVideo: false,
        isPremium: false
    },
        {
          id: 2,
        title: 'Cinematic Logo Reveal',
        author: 'MotionCraft',
        category: 'Video Templates',
        price: '$29',
        downloads: '89K',
        rating: 4.9,
        image: 'https://picsum.photos/seed/cinematic-logo/400/300',
        isVideo: true,
        isPremium: true
    },
        {
          id: 3,
        title: 'Minimal UI Kit',
        author: 'UIElements',
        category: 'Graphics',
        price: 'Free',
        downloads: '203K',
        rating: 4.7,
        image: 'https://picsum.photos/seed/minimal-ui-kit/400/300',
        isVideo: false,
        isPremium: false
    },
        {
          id: 4,
        title: 'Epic Orchestral Music',
        author: 'AudioMasters',
        category: 'Music',
        price: '$19',
        downloads: '67K',
        rating: 4.9,
        image: 'https://picsum.photos/seed/orchestral-music/400/300',
        isVideo: false,
        isPremium: true
    }
        ];

        /* â”€â”€ Media type icons for collections â”€â”€ */
        const typeIcons = {
          brand: <span style={{ fontWeight: 700, fontSize: 12, color: '#9ca3af' }}>B</span>,
        photo: <BsImage size={12} style={{ color: '#9ca3af' }} />,
        video: <BsCameraVideo size={12} style={{ color: '#9ca3af' }} />,
  };

        /* â”€â”€ Value Prop Cards â”€â”€ */
        const whyCards = [
        {
          icon: <FiGrid size={24} />,
        title: 'Every category, covered',
        desc: 'Make your best work yet with a comprehensive library of high-quality, creative assets â€” video, audio, photos, graphics, templates, and more from talented global artists.',
    },
        {
          icon: <BsStars size={24} />,
        title: 'Suite of AI tools',
        desc: 'Access to AI tools like VideoGen, MusicGen, and ImageGen, powered by the latest models. Choose the plan that fits your creative flow.',
    },
        {
          icon: <FiDownload size={24} />,
        title: 'Unlimited asset downloads',
        desc: 'Get all the upsides with full access to any asset at no extra cost, giving you great value in one simple subscription.',
    },
        ];

        return (
        <div className="min-h-screen font-sans" style={{ background: '#0a0a0a', color: '#ffffff' }}>
          <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-8 lg:px-8">

            {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            ENHANCED SEARCH BAR WITH FILTERS
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 flex w-full items-center rounded-full px-2 py-1.5 relative"
              style={{
                background: '#1a1a1a',
                border: '1px solid #333333',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 pl-4 pr-3 py-2 text-[15px] font-semibold whitespace-nowrap hover:bg-gray-800 rounded-full transition-colors"
                style={{ color: '#e5e7eb' }}
              >
                {selectedCategory} <FiChevronDown size={16} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Filter Dropdown */}
              {isFilterOpen && (
                <Motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-xl shadow-lg border border-gray-700 py-2 z-50"
                >
                  {['All Items', 'Stock Video', 'Video Templates', 'Stock Photos', 'Music', 'Graphics', 'Fonts'].map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
                      style={{ color: selectedCategory === category ? '#79cc4a' : '#e5e7eb' }}
                    >
                      {category}
                    </button>
                  ))}
                </Motion.div>
              )}

              <div className="mx-2 h-6 w-px" style={{ background: '#333333' }} />
              <div className="flex flex-1 items-center gap-3 px-3">
                <FiSearch size={20} style={{ color: '#9ca3af' }} />
                <input
                  type="text"
                  placeholder="Search millions of assets..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full bg-transparent text-[15px] focus:outline-none placeholder-gray-500"
                  style={{ color: '#ffffff' }}
                />
              </div>
              <div className="flex items-center gap-1.5 pr-2">
                <Motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-800"
                  style={{ color: '#9ca3af' }}
                >
                  <FiMusic size={18} />
                </Motion.button>
                <Motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-800"
                  style={{ color: '#9ca3af' }}
                >
                  <FiImage size={18} />
                </Motion.button>
                <Motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-800"
                  style={{ color: '#9ca3af' }}
                >
                  <FiFilter size={18} />
                </Motion.button>
              </div>
            </Motion.div>

            {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            ENHANCED HERO SECTION WITH PARALLAX
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <section ref={heroRef} className="grid gap-6 lg:grid-cols-[2.2fr_1fr] relative overflow-hidden" style={{ minHeight: '460px' }}>
              {/* Left Dark Hero Block with Parallax */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="relative overflow-hidden rounded-[20px] p-10 lg:p-14 flex items-end lg:items-center"
                style={{ background: '#1a1a1a', minHeight: '420px' }}
              >
                {/* Parallax Background Image */}
                <Motion.div
                  className="absolute inset-0"
                  style={{ y: smoothHeroY, scale: heroScale }}
                >
                  <Motion.img
                    src="https://picsum.photos/seed/envato-hero-creative/1200/800"
                    alt="Creative Assets Hero"
                    className="h-full w-full object-cover"
                    style={{ opacity: 0.85 }}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.85 }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Enhanced Gradient Overlays */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to right, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.8) 35%, rgba(26,26,26,0.3) 60%, transparent 80%)',
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(26,26,26,0.7) 0%, transparent 50%)',
                    }}
                  />
                  {/* Animated Particles Effect */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(6)].map((_, i) => (
                      <Motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-green-400 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`,
                        }}
                        animate={{
                          y: [-10, 10, -10],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </Motion.div>

                <Motion.div
                  className="relative z-10 w-full max-w-xl"
                  style={{ opacity: heroOpacity }}
                >
                  <Motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    className="text-[42px] sm:text-[52px] md:text-[62px] font-bold leading-[1.02] tracking-tight"
                    style={{ color: '#79cc4a' }}
                  >
                    Unlimited<br />
                    creativity, all<br />
                    in one place
                  </Motion.h1>

                  <Motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                    className="mt-6 max-w-[460px] text-[17px] sm:text-[18px] font-semibold leading-snug"
                    style={{ color: '#ffffff' }}
                  >
                    Create with AI tools, and unlimited stock, fonts, videos, music, templates &amp; more.
                  </Motion.p>

                  {/* CTA Buttons */}
                  <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
                    className="mt-8 flex flex-wrap gap-4"
                  >
                    <Motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(121,204,74,0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 rounded-full text-[15px] font-bold transition-all"
                      style={{ background: '#79cc4a', color: '#141414' }}
                    >
                      Start Free Trial
                    </Motion.button>
                    <Motion.button
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 rounded-full text-[15px] font-bold border-2 transition-all"
                      style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }}
                    >
                      View Plans
                    </Motion.button>
                  </Motion.div>
                </Motion.div>
              </Motion.div>

              {/* Enhanced Right Pricing Block */}
              <Motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="relative flex flex-col rounded-[20px] p-8 lg:px-10 group"
                style={{
                  background: '#1a1a1a',
                  border: '1px solid #333333',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                {/* Hover Effect */}
                <Motion.div
                  className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(121,204,74,0.05) 0%, rgba(121,204,74,0.02) 100%)',
                  }}
                />

                <div className="relative z-10">
                  <Motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-[15px] font-medium"
                    style={{ color: '#9ca3af' }}
                  >
                    From
                  </Motion.p>
                  <Motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-1 flex items-baseline gap-1"
                  >
                    <span className="text-[36px] font-bold tracking-tight" style={{ color: '#ffffff' }}>
                      $16.50
                    </span>
                    <span className="text-[15px] font-medium" style={{ color: '#9ca3af' }}>/month</span>
                  </Motion.div>

                  <Motion.ul
                    initial="initial"
                    animate="whileInView"
                    variants={staggerContainer}
                    className="mt-8 mb-8 space-y-5 flex-1"
                  >
                    {[
                      { icon: <FiDownload strokeWidth={2.5} size={16} />, text: 'Unlimited downloads of 27+ million creative assets' },
                      { icon: <BsStars size={16} />, text: 'AI Tools: video, image, audio' },
                      { icon: <FiCheck strokeWidth={3} size={16} />, text: 'Lifetime commercial license' },
                      { icon: <FiHeart size={16} />, text: 'Premium support & tutorials' }
                    ].map((item, i) => (
                      <Motion.li key={i} variants={staggerItem} className="flex items-start gap-4">
                        <div className="mt-0.5" style={{ color: '#9ca3af' }}>
                          {item.icon}
                        </div>
                        <p className="text-[14px] font-medium leading-snug" style={{ color: '#e5e7eb' }}>
                          {item.text}
                        </p>
                      </Motion.li>
                    ))}
                  </Motion.ul>

                  <Motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 8px 25px rgba(121,204,74,0.25)',
                      backgroundColor: '#6abb3c'
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-[10px] py-3.5 text-center text-[15px] font-bold transition-all duration-200"
                    style={{ background: '#79cc4a', color: '#141414' }}
                  >
                    Subscribe to download
                  </Motion.button>

                  <Motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-3 text-center text-[12px]"
                    style={{ color: '#9ca3af' }}
                  >
                    Cancel anytime. No commitment.
                  </Motion.p>
                </div>
              </Motion.div>
            </section>

            {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            ENHANCED AI TOOLS WITH ANIMATIONS
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <Motion.section {...riseIn} className="mt-16">
              <Motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 text-[26px] font-bold tracking-tight"
                style={{ color: '#ffffff' }}
              >
                Suite of AI tools
              </Motion.h2>
              <ScatterToGrid
                className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                intensity={1.2}
                scrollOffset={['start end', 'center center']}
              >
                {aiTools.map((tool, index) => (
                  <Motion.div
                    key={tool.name}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                    }}
                    className="group relative overflow-hidden rounded-[16px] cursor-pointer"
                    style={{ aspectRatio: '4/3', background: '#222' }}
                  >
                    {/* Simplified Parallax Image Animation with Fallback */}
                    <Motion.div
                      className="absolute inset-0 overflow-hidden"
                      initial={{ opacity: 0.3, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Motion.div
                        {...simpleVariants}
                        viewport={{ once: true, margin: '-50px', amount: 0.1 }}
                      >
                        <Motion.div
                          className="h-full w-full relative bg-gray-800 flex items-center justify-center"
                        >
                          <Motion.img
                            src={`https://picsum.photos/seed/${tool.seed}/600/450`}
                            alt={tool.name}
                            className="h-full w-full object-cover"
                            whileHover={{
                              scale: 1.15,
                              rotate: index % 2 === 0 ? 2 : -2,
                              filter: "brightness(1.1) contrast(1.1)"
                            }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/600x450/333333/79cc4a?text=${tool.name}`;
                            }}
                            loading="lazy"
                          />

                          {/* Loading placeholder */}
                          <Motion.div
                            className="absolute inset-0 bg-gray-700 flex items-center justify-center"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                          >
                            <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
                          </Motion.div>
                        </Motion.div>

                        {/* Floating particles effect */}
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(3)].map((_, i) => (
                            <Motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                              style={{
                                left: `${20 + i * 30}%`,
                                top: `${30 + i * 20}%`,
                              }}
                              animate={{
                                y: [-5, 5, -5],
                                x: [-2, 2, -2],
                                opacity: [0.3, 0.8, 0.3],
                                scale: [0.8, 1.2, 0.8]
                              }}
                              transition={{
                                duration: 2 + i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.2 + i * 0.3
                              }}
                            />
                          ))}
                        </div>
                      </Motion.div>

                      {/* Animated Gradient Overlay */}
                      <Motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{
                          background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 35%, transparent 70%, rgba(0,0,0,0.3) 100%)',
                        }}
                        whileHover={{
                          background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 35%, transparent 70%, rgba(0,0,0,0.5) 100%)',
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Tool Label with Enhanced Animation */}
                      <Motion.div
                        className="absolute left-3.5 top-3.5 flex items-center gap-2"
                        initial={{ opacity: 0.9, y: 0 }}
                        whileHover={{ opacity: 1, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Motion.div
                          className="flex items-center justify-center rounded-lg"
                          style={{
                            width: 28,
                            height: 28,
                            background: tool.color,
                          }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {React.cloneElement(tool.icon, { style: { color: '#ffffff' } })}
                        </Motion.div>
                        <span
                          className="text-[15px] font-bold"
                          style={{
                            color: '#ffffff',
                            textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                          }}
                        >
                          {tool.name}
                        </span>
                      </Motion.div>

                      {/* Enhanced Prompt Overlay */}
                      {tool.hasPrompt && (
                        <Motion.div
                          className="absolute bottom-4 left-4 right-4"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                        >
                          <Motion.div
                            className="flex items-center gap-2 rounded-xl px-3 py-2"
                            style={{
                              background: 'rgba(255,255,255,0.95)',
                              backdropFilter: 'blur(12px)',
                              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                            }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                              <BsStars size={14} style={{ color: '#f59e0b' }} />
                            </Motion.div>
                            <span className="text-[12px] text-gray-600 flex-1 truncate">
                              High-fashion photoshoot
                            </span>
                            <Motion.span
                              className="text-[11px] font-bold rounded-lg px-2.5 py-1 cursor-pointer"
                              style={{ background: '#79cc4a', color: '#141414' }}
                              whileHover={{ scale: 1.05, backgroundColor: '#6abb3c' }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Generate
                            </Motion.span>
                          </Motion.div>
                        </Motion.div>
                      )}

                      {/* Hover Play Button for Video Tools */}
                      {tool.name.includes('Video') && (
                        <Motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Motion.div
                            className="flex items-center justify-center w-12 h-12 rounded-full"
                            style={{ background: 'rgba(255,255,255,0.9)' }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <BsPlayFill size={24} style={{ color: '#141414' }} />
                          </Motion.div>
                        </Motion.div>
                      )}
                    </Motion.div>
                  </Motion.div>
                ))}
              </ScatterToGrid>
            </Motion.section>

            {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            ENHANCED ASSET CATEGORIES WITH PARALLAX
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <Motion.section {...riseIn} className="mt-20">
              <Motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 text-[26px] font-bold tracking-tight"
                style={{ color: '#ffffff' }}
              >
                Every type of asset, for any type of project
              </Motion.h2>
              <ScatterToGrid
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                intensity={1}
                scrollOffset={['start end', 'center center']}
              >
                {categories.map((cat, i) => (
                  <Motion.div
                    key={i}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                    }}
                    className="group flex flex-col overflow-hidden rounded-[16px] p-4 cursor-pointer relative"
                    style={{
                      background: '#1a1a1a',
                      border: '1px solid #333333',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    }}
                  >
                    {/* Hover Gradient Effect */}
                    <Motion.div
                      className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: cat.gradient }}
                    />
                    <Motion.div
                      className="absolute inset-0 rounded-[16px] bg-gray-900 opacity-0 group-hover:opacity-90 transition-opacity duration-300"
                    />

                    <div className="relative z-10">
                      <Motion.h3
                        className="text-[17px] font-bold transition-colors duration-300"
                        style={{ color: '#ffffff' }}
                        whileHover={{ color: '#79cc4a' }}
                      >
                        {cat.title}
                      </Motion.h3>
                      <Motion.p
                        className="mb-3 mt-0.5 text-[13px] font-medium transition-colors duration-300"
                        style={{ color: '#9ca3af' }}
                      >
                        {cat.count}
                      </Motion.p>

                      <Motion.div
                        className="flex-1 w-full rounded-[12px] overflow-hidden relative"
                        style={{ background: '#2a2a2a' }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Advanced Parallax Image */}
                        <Motion.div
                          className="w-full h-full relative overflow-hidden"
                          initial="initial"
                          whileInView="whileInView"
                          viewport={{ once: true, margin: '-80px' }}
                          variants={imageParallaxVariants[getCornerSideAnimation(i + 10)]}
                        >
                          <Motion.img
                            src={`https://picsum.photos/seed/${cat.seed}/500/${cat.imgH}`}
                            alt={cat.title}
                            className="w-full object-cover"
                            style={{ height: `${cat.imgH}px` }}
                            whileHover={{
                              scale: 1.15,
                              rotate: i % 3 === 0 ? 1 : i % 3 === 1 ? -1 : 0,
                              filter: "brightness(1.2) saturate(1.1)"
                            }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                          />

                          {/* Animated overlay particles */}
                          <div className="absolute inset-0 pointer-events-none">
                            {[...Array(2)].map((_, particleIndex) => (
                              <Motion.div
                                key={particleIndex}
                                className="absolute w-0.5 h-0.5 bg-green-400 rounded-full"
                                style={{
                                  left: `${30 + particleIndex * 40}%`,
                                  top: `${40 + particleIndex * 20}%`,
                                }}
                                animate={{
                                  y: [-3, 3, -3],
                                  x: [-1, 1, -1],
                                  opacity: [0.4, 0.9, 0.4],
                                  scale: [0.5, 1.5, 0.5]
                                }}
                                transition={{
                                  duration: 1.5 + particleIndex * 0.3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: i * 0.1 + particleIndex * 0.2
                                }}
                              />
                            ))}
                          </div>

                          {/* Shimmer effect on scroll */}
                          <Motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                            animate={{ x: ['0%', '200%'] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: "easeInOut",
                              delay: i * 0.2
                            }}
                          />
                        </Motion.div>

                        {/* Category Icon Overlay */}
                        <Motion.div
                          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                          style={{ background: 'rgba(121,204,74,0.9)' }}
                          initial={{ scale: 0, rotate: -180 }}
                          whileHover={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <FiPlay size={14} style={{ color: '#ffffff' }} />
                        </Motion.div>
                      </Motion.div>
                    </div>
                  </Motion.div>
                ))}
              </ScatterToGrid>
            </Motion.section>

            {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            TRENDING ASSETS SECTION
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <Motion.section {...riseIn} className="mt-20">
              <Motion.div className="flex items-center justify-between mb-6">
                <Motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[26px] font-bold tracking-tight"
                  style={{ color: '#ffffff' }}
                >
                  Trending now
                </Motion.h2>
                <Motion.button
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[14px] font-semibold px-4 py-2 rounded-full transition-colors"
                  style={{ color: '#79cc4a', border: '1px solid #79cc4a' }}
                >
                  View all
                </Motion.button>
              </Motion.div>

              <ScatterToGrid
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                intensity={1.3}
                scrollOffset={['start end', 'center center']}
              >
                {trendingAssets.map((asset, index) => (
                  <Motion.div
                    key={asset.id}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                    }}
                    className="group cursor-pointer"
                  >
                    {/* Advanced Parallax Asset Image */}
                    <Motion.div
                      className="relative w-full aspect-[4/3] mb-3 overflow-hidden rounded-[12px]"
                      style={{ background: '#2a2a2a' }}
                    >
                      <Motion.div
                        className="w-full h-full relative"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={imageParallaxVariants[getCornerSideAnimation(index + 20)]}
                      >
                        <Motion.img
                          src={asset.image}
                          alt={asset.title}
                          className="h-full w-full object-cover"
                          whileHover={{
                            scale: 1.2,
                            rotate: index % 2 === 0 ? 3 : -3,
                            filter: "brightness(1.15) contrast(1.05)"
                          }}
                          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        />

                        {/* Dynamic light rays effect */}
                        <Motion.div
                          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0"
                          animate={{
                            opacity: [0, 0.3, 0],
                            rotate: [0, 180, 360]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.5
                          }}
                        />

                        {/* Floating elements */}
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(4)].map((_, i) => (
                            <Motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-green-400 rounded-full opacity-70"
                              style={{
                                left: `${15 + i * 25}%`,
                                top: `${20 + i * 15}%`,
                              }}
                              animate={{
                                y: [-8, 8, -8],
                                x: [-3, 3, -3],
                                opacity: [0.3, 1, 0.3],
                                scale: [0.5, 1.5, 0.5]
                              }}
                              transition={{
                                duration: 2 + i * 0.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.3 + i * 0.2
                              }}
                            />
                          ))}
                        </div>
                      </Motion.div>

                      {/* Overlay Elements */}
                      <Motion.div
                        className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      />

                      {/* Premium Badge */}
                      {asset.isPremium && (
                        <Motion.div
                          className="absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-bold"
                          style={{ background: '#79cc4a', color: '#141414' }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                        >
                          PREMIUM
                        </Motion.div>
                      )}

                      {/* Video Play Button */}
                      {asset.isVideo && (
                        <Motion.div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Motion.div
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ background: 'rgba(255,255,255,0.9)' }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <BsPlayFill size={24} style={{ color: '#141414' }} />
                          </Motion.div>
                        </Motion.div>
                      )}

                      {/* Action Buttons */}
                      <Motion.div
                        className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100"
                        initial={{ y: -10 }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ background: 'rgba(255,255,255,0.9)' }}
                        >
                          <FiHeart size={14} style={{ color: '#141414' }} />
                        </Motion.button>
                        <Motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ background: 'rgba(255,255,255,0.9)' }}
                        >
                          <FiBookmark size={14} style={{ color: '#141414' }} />
                        </Motion.button>
                      </Motion.div>
                    </Motion.div>

                    {/* Asset Info */}
                    <Motion.div className="space-y-2">
                      <Motion.h3
                        className="text-[15px] font-semibold leading-snug group-hover:text-green-400 transition-colors"
                        style={{ color: '#ffffff' }}
                      >
                        {asset.title}
                      </Motion.h3>

                      <Motion.div className="flex items-center justify-between">
                        <Motion.p className="text-[12px] font-medium" style={{ color: '#9ca3af' }}>
                          by {asset.author}
                        </Motion.p>
                        <Motion.div className="flex items-center gap-1">
                          <FiStar size={12} style={{ color: '#f59e0b' }} />
                          <span className="text-[12px] font-medium" style={{ color: '#9ca3af' }}>
                            {asset.rating}
                          </span>
                        </Motion.div>
                      </Motion.div>

                      <Motion.div className="flex items-center justify-between">
                        <Motion.span
                          className="text-[13px] font-bold"
                          style={{ color: asset.price === 'Free' ? '#79cc4a' : '#ffffff' }}
                        >
                          {asset.price}
                        </Motion.span>
                        <Motion.span className="text-[11px]" style={{ color: '#9ca3af' }}>
                          {asset.downloads} downloads
                        </Motion.span>
                      </Motion.div>
                    </Motion.div>
                  </Motion.div>
                ))}
              </ScatterToGrid>
            </Motion.section>
            {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            ENHANCED CURATED COLLECTIONS
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <Motion.section {...riseIn} className="mt-20">
              <Motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 text-[26px] font-bold tracking-tight"
                style={{ color: '#141414' }}
              >
                Curated Collections
              </Motion.h2>
              <div className="relative">
                <ScatterToGrid
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                  intensity={1.1}
                  scrollOffset={['start end', 'center center']}
                >
                  {collections.map((coll, i) => (
                    <Motion.div
                      key={i}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                      }}
                      className="group cursor-pointer"
                    >
                      {/* Advanced Parallax Main Image */}
                      <Motion.div
                        className="w-full aspect-[4/3] mb-0.5 overflow-hidden rounded-[12px] relative"
                        style={{ background: '#2a2a2a' }}
                      >
                        <Motion.div
                          className="w-full h-full relative"
                          initial="initial"
                          whileInView="whileInView"
                          viewport={{ once: true, margin: '-70px' }}
                          variants={imageParallaxVariants[getCornerSideAnimation(i + 30)]}
                        >
                          <Motion.img
                            src={`https://picsum.photos/seed/${coll.seed}_main/500/375`}
                            alt={coll.title}
                            className="h-full w-full object-cover"
                            whileHover={{
                              scale: 1.25,
                              rotate: i % 2 === 0 ? 2 : -2,
                              filter: "brightness(1.1) saturate(1.2)"
                            }}
                            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                          />

                          {/* Magical sparkle effect */}
                          <div className="absolute inset-0 pointer-events-none">
                            {[...Array(5)].map((_, sparkleIndex) => (
                              <Motion.div
                                key={sparkleIndex}
                                className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                                style={{
                                  left: `${10 + sparkleIndex * 20}%`,
                                  top: `${15 + sparkleIndex * 15}%`,
                                }}
                                animate={{
                                  scale: [0, 1.5, 0],
                                  opacity: [0, 1, 0],
                                  rotate: [0, 180, 360]
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: i * 0.2 + sparkleIndex * 0.3
                                }}
                              />
                            ))}
                          </div>

                          {/* Gradient sweep effect */}
                          <Motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -translate-x-full"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              repeatDelay: 4,
                              ease: "easeInOut",
                              delay: i * 0.5
                            }}
                          />
                        </Motion.div>

                        {/* Featured Badge */}
                        {coll.featured && (
                          <Motion.div
                            className="absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-bold"
                            style={{ background: '#f59e0b', color: '#ffffff' }}
                            initial={{ scale: 0, rotate: -12 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                          >
                            FEATURED
                          </Motion.div>
                        )}

                        {/* Hover Overlay */}
                        <Motion.div
                          className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                        />

                        {/* Collection Count */}
                        <Motion.div
                          className="absolute bottom-3 right-3 px-2 py-1 rounded-md text-[11px] font-bold opacity-0 group-hover:opacity-100"
                          style={{ background: 'rgba(255,255,255,0.9)', color: '#141414' }}
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {20 + (i * 7)} items
                        </Motion.div>
                      </Motion.div>

                      {/* Enhanced Thumbnail Grid */}
                      <Motion.div
                        className="grid grid-cols-3 gap-0.5 mb-3"
                        initial="initial"
                        whileInView="whileInView"
                        variants={{
                          initial: {},
                          whileInView: {
                            transition: {
                              staggerChildren: 0.05,
                            },
                          },
                        }}
                      >
                        {[1, 2, 3].map((thumb) => (
                          <Motion.div
                            key={thumb}
                            className="w-full aspect-square overflow-hidden rounded-[6px] relative"
                            style={{ background: '#2a2a2a' }}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={imageParallaxVariants[getCornerSideAnimation(i * 3 + thumb + 40)]}
                          >
                            <Motion.img
                              src={`https://picsum.photos/seed/${coll.seed}_t${thumb}/200/200`}
                              alt=""
                              className="h-full w-full object-cover"
                              whileHover={{
                                scale: 1.2,
                                rotate: thumb % 2 === 0 ? 5 : -5,
                                filter: "brightness(1.3)"
                              }}
                              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            />

                            {/* Mini floating particles */}
                            <div className="absolute inset-0 pointer-events-none">
                              <Motion.div
                                className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full top-2 right-2"
                                animate={{
                                  scale: [0.5, 1.2, 0.5],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                  duration: 1.2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: (i * 3 + thumb) * 0.1
                                }}
                              />
                            </div>

                            {/* Mini hover effect */}
                            <Motion.div
                              className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-200"
                            />
                          </Motion.div>
                        ))}
                      </Motion.div>

                      {/* Enhanced Title + Media Type Icons */}
                      <Motion.div className="flex items-start justify-between gap-3">
                        <Motion.h3
                          className="flex-1 text-[14px] font-medium leading-snug group-hover:text-green-400 transition-colors duration-300"
                          style={{ color: '#ffffff' }}
                        >
                          {coll.title}
                        </Motion.h3>
                        <Motion.div
                          className="flex items-center gap-1.5 mt-0.5 shrink-0"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {coll.types.map((t, idx) => (
                            <Motion.span
                              key={idx}
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 0.2 }}
                            >
                              {typeIcons[t]}
                            </Motion.span>
                          ))}
                        </Motion.div>
                      </Motion.div>
                    </Motion.div>
                  ))}
                </ScatterToGrid>

                {/* Enhanced Carousel Arrow */}
                <Motion.button
                  className="absolute right-0 top-[35%] -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hidden lg:flex group"
                  style={{
                    background: '#1a1a1a',
                    border: '1px solid #333333',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    color: '#e5e7eb',
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                    backgroundColor: '#79cc4a',
                    color: '#ffffff'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <FiChevronRight size={20} />
                  </Motion.div>
                </Motion.button>
              </div>
            </Motion.section>

            {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            ENHANCED VALUE PROPS WITH ANIMATIONS
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <Motion.section {...riseIn} className="mt-24">
              <ScatterToGrid
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                intensity={0.8}
                scrollOffset={['start end', 'center center']}
              >
                {whyCards.map((card, i) => (
                  <Motion.div
                    key={i}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                    }}
                    className="rounded-[20px] p-8 relative overflow-hidden group"
                    style={{
                      background: i === 2 ? '#1a1a1a' : '#1a1a1a',
                      border: i === 2 ? 'none' : '1px solid #333333',
                      boxShadow: i === 2 ? '0 8px 40px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.2)',
                    }}
                  >
                    {/* Animated Background Effect */}
                    {i === 2 && (
                      <Motion.div
                        className="absolute inset-0 opacity-10"
                        initial={{ scale: 0, rotate: 0 }}
                        whileInView={{ scale: 1, rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <div
                          className="w-full h-full"
                          style={{
                            background: 'radial-gradient(circle at 30% 70%, #79cc4a 0%, transparent 50%), radial-gradient(circle at 70% 30%, #4ade80 0%, transparent 50%)',
                          }}
                        />
                      </Motion.div>
                    )}

                    {/* Hover Glow Effect */}
                    <Motion.div
                      className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: i === 2
                          ? 'linear-gradient(135deg, rgba(121,204,74,0.1) 0%, rgba(74,222,128,0.05) 100%)'
                          : 'linear-gradient(135deg, rgba(121,204,74,0.03) 0%, rgba(74,222,128,0.01) 100%)',
                      }}
                    />

                    <div className="relative z-10">
                      <Motion.div
                        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl relative overflow-hidden"
                        style={{
                          background: i === 2 ? 'rgba(121,204,74,0.15)' : '#2a2a2a',
                          color: i === 2 ? '#79cc4a' : '#9ca3af',
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Icon Glow Effect */}
                        {i === 2 && (
                          <Motion.div
                            className="absolute inset-0 rounded-xl"
                            style={{ background: 'rgba(121,204,74,0.2)' }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        )}
                        <div className="relative z-10">
                          {card.icon}
                        </div>
                      </Motion.div>

                      <Motion.h3
                        className="text-[20px] font-bold mb-3 tracking-tight"
                        style={{ color: i === 2 ? '#ffffff' : '#ffffff' }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                      >
                        {card.title}
                      </Motion.h3>

                      <Motion.p
                        className="text-[14px] leading-relaxed mb-6"
                        style={{ color: i === 2 ? 'rgba(255,255,255,0.75)' : '#6b7280' }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        {card.desc}
                      </Motion.p>

                      {i === 2 && (
                        <Motion.button
                          className="rounded-[10px] px-6 py-3 text-[14px] font-bold transition-all duration-300 relative overflow-hidden group"
                          style={{ background: '#79cc4a', color: '#141414' }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: '#6abb3c',
                            boxShadow: '0 8px 25px rgba(121,204,74,0.3)'
                          }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          {/* Button Shine Effect */}
                          <Motion.div
                            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                          />
                          <span className="relative z-10">Get unlimited downloads</span>
                        </Motion.button>
                      )}
                    </div>
                  </Motion.div>
                ))}
              </ScatterToGrid>
            </Motion.section>


      </div >
    </div >
  );
};

export default BrowsePage;
