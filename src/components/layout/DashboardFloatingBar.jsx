import React from 'react';
import { FiBookmark, FiChevronDown, FiMaximize, FiMoreHorizontal } from 'react-icons/fi';

const DashboardFloatingBar = () => {
  return (
    <div className="fixed bottom-10 left-1/2 z-[60] -translate-x-1/2">
      <div className="flex items-center gap-4 rounded-full border border-white/10 bg-[#121417] px-4 py-2.5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] backdrop-blur-3xl">
        <div className="flex items-center gap-3 rounded-full bg-white/5 py-2 pl-4 pr-6 transition-colors hover:bg-white/10 cursor-pointer">
           <FiBookmark size={18} className="text-white/60" />
           <span className="text-sm font-bold text-white">Untitled</span>
           <FiChevronDown size={14} className="mt-0.5 text-white/30" />
        </div>
        
        <div className="h-6 w-px bg-white/10" />
        
        <div className="flex items-center gap-2">
           {[1, 2, 3].map(i => (
             <div key={i} className="h-10 w-10 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/20 transition-all hover:bg-white/5 hover:text-white/60">
                <div className="h-4 w-4 rounded-sm border-2 border-current border-dashed" />
             </div>
           ))}
        </div>

        <div className="h-6 w-px bg-white/10" />

        <button className="flex h-10 w-10 items-center justify-center rounded-full text-white/40 hover:bg-white/5 hover:text-white transition-colors">
          <FiMaximize size={18} />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-full text-white/40 hover:bg-white/5 hover:text-white transition-colors">
          <FiMoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
};

export default DashboardFloatingBar;
