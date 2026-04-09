import React, { useState } from 'react';
import { FiCheck, FiDownload } from 'react-icons/fi';
import { downloadImage } from '../../utils/downloadImage';

const DownloadImageButton = ({
  imageUrl,
  filename,
  className = '',
  label = 'Download',
  iconOnly = false,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleClick = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isDownloading) return;

    setIsDownloading(true);

    try {
      await downloadImage(imageUrl, filename);
      setIsDone(true);
      window.setTimeout(() => setIsDone(false), 1400);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-black/45 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/78 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md transition-all duration-300 hover:border-white/24 hover:bg-black/62 hover:text-white ${className}`}
    >
      {isDone ? <FiCheck size={14} /> : <FiDownload size={14} className={isDownloading ? 'animate-pulse' : ''} />}
      {!iconOnly && <span>{isDone ? 'Saved' : isDownloading ? 'Saving' : label}</span>}
    </button>
  );
};

export default DownloadImageButton;
