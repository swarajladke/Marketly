import React, { useState } from 'react';

const FALLBACK_SRC = 'data:image/svg+xml,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <rect width="400" height="300" fill="#F1F5F9"/>
    <text x="200" y="145" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="14" font-weight="600">Image unavailable</text>
    <rect x="178" y="105" width="44" height="30" rx="4" fill="none" stroke="#CBD5E1" stroke-width="2"/>
    <circle cx="190" cy="116" r="4" fill="#CBD5E1"/>
    <path d="M178 130 l12 -10 l8 6 l10 -8 l14 12" fill="none" stroke="#CBD5E1" stroke-width="2"/>
  </svg>`
);

/**
 * Image component with automatic fallback on load errors.
 * Drop-in replacement for <img>.
 */
const ImageWithFallback = ({ src, alt, fallbackSrc = FALLBACK_SRC, className, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback;
