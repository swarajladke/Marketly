import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  FiBell,
  FiBox,
  FiDollarSign,
  FiHome,
  FiMenu,
  FiMessageSquare,
  FiPercent,
  FiSearch,
  FiSettings,
  FiStar,
  FiTrendingUp,
  FiUploadCloud,
  FiX,
  FiCommand,
  FiMusic,
  FiImage,
  FiChevronDown,
} from 'react-icons/fi';
import DashboardFloatingBar from './DashboardFloatingBar';

const DashboardLayout = ({ children }) => {

  const navLinks = useMemo(
    () => [
      { name: 'Gen AI', path: '#' },
      { name: 'Video Templates', path: '#' },
      { name: 'Stock Video', path: '#' },
      { name: 'Audio', path: '#' },
      { name: 'More', path: '#' },
    ],
    [],
  );

  const rightActions = [
    { name: 'License', path: '#' },
    { name: 'Enterprise', path: '#' },
    { name: 'Pricing', path: '#' },
  ];

  return (
    <div className="min-h-screen bg-[#000000] font-body text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#000000] pt-4">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 pb-4 sm:px-6 xl:px-8">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-envato p-1">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-black fill-current">
                   <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 18l-8-4V8l8 4 8-4v8l-8 4z" />
                </svg>
              </span>
              <span className="font-heading text-2xl font-bold tracking-tight text-white">envato</span>
            </Link>

            <nav className="hidden items-center gap-6 xl:flex">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className="group flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white"
                >
                  {link.name}
                  <FiChevronDown size={14} className="opacity-40 transition-transform group-hover:rotate-180" />
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-6 xl:flex mr-4">
              {rightActions.map((action) => (
                <button key={action.name} className="text-sm font-medium text-white/70 hover:text-white">
                  {action.name}
                </button>
              ))}
            </div>
            
            <button className="hidden rounded-md bg-envato px-6 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90 md:block">
              Get unlimited downloads
            </button>
            
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
              </svg>
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7dde6] text-xs font-bold text-black border-2 border-white/10">
              SL
            </div>
          </div>
        </div>

        <div className="mx-auto mt-2 w-full max-w-[1440px] px-4 sm:px-6 xl:px-8 pb-4">
          <div className="flex h-16 w-full items-center overflow-hidden rounded-full border border-white/10 bg-[#121417] px-2 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
            <button className="flex items-center gap-2 rounded-full px-6 py-2 text-sm font-bold text-white/90 transition-colors hover:bg-white/5">
              All Items
              <FiChevronDown size={14} className="opacity-50" />
            </button>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex flex-1 items-center px-4">
               <FiSearch className="text-white/30" size={20} />
               <input
                 type="search"
                 placeholder="Search themes, templates and more..."
                 className="flex-1 border-none bg-transparent px-4 text-base font-bold text-white placeholder:text-white/20 focus:ring-0"
               />
            </div>
            <div className="flex items-center gap-2 pr-2">
               <button className="hidden rounded-full bg-envato px-6 py-2.5 text-sm font-black text-black transition-transform hover:scale-105 sm:block">
                 Search
               </button>
            </div>
          </div>
        </div>
        
        {/* Progress indicator mockup line */}
        <div className="relative h-1 w-full bg-white/5">
           <div className="absolute left-[62%] h-full w-4 bg-envato rounded-full blur-sm shadow-[0_0_10px_rgba(177,255,74,0.8)]" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative mx-auto min-h-[calc(100vh-140px)] w-full max-w-[1440px] py-10 px-4 sm:px-6 xl:px-8">
        {children}
      </main>

      {/* Floating Bar */}
      <DashboardFloatingBar />
    </div>
  );
};

export default DashboardLayout;
