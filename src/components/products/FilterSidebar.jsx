import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiStar, FiFilter, FiX } from 'react-icons/fi';
import { categories } from '../../data/mockData';

const FilterSection = ({ title, defaultOpen = true, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border py-4">
      <button 
        className="w-full flex justify-between items-center text-dark font-medium hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
};

const FilterSidebar = ({ isMobileOpen, setMobileOpen }) => {
  const sidebarContent = (
    <div className="bg-white rounded-card shadow-card p-5 h-full overflow-y-auto scrollbar-hide">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-heading font-bold text-xl text-dark hidden lg:block">Filters</h2>
        <span className="font-heading font-bold text-xl text-dark lg:hidden">Filters</span>
        <button className="text-primary font-medium text-sm hover:underline">Clear All</button>
        <button 
          className="lg:hidden text-dark p-1" 
          onClick={() => setMobileOpen(false)}
        >
          <FiX size={24} />
        </button>
      </div>

      <FilterSection title="Category" defaultOpen={true}>
        <div className="flex flex-col gap-3 max-h-48 overflow-y-auto scrollbar-hide pr-1">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary" />
                <span className="text-muted group-hover:text-dark transition-colors">{cat.name}</span>
              </div>
              <span className="text-xs text-muted/70 bg-surface px-2 py-0.5 rounded-full">{cat.productCount}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Price Range">
        <div className="px-2">
          {/* Mock Dual Slider */}
          <div className="h-1.5 w-full bg-surface rounded-full relative mb-6 mt-2">
            <div className="absolute left-[20%] right-[30%] bg-primary h-full rounded-full"></div>
            <div className="w-4 h-4 bg-white border-2 border-primary rounded-full absolute -top-1.5 left-[20%] shadow-sm cursor-grab"></div>
            <div className="w-4 h-4 bg-white border-2 border-primary rounded-full absolute -top-1.5 right-[30%] shadow-sm cursor-grab"></div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 bg-surface border border-border rounded-btn px-3 py-1.5 flex items-center">
              <span className="text-muted mr-1">$</span>
              <input type="number" className="w-full bg-transparent focus:outline-none text-dark text-sm" placeholder="Min" defaultValue={10} />
            </div>
            <span className="text-muted">-</span>
            <div className="flex-1 bg-surface border border-border rounded-btn px-3 py-1.5 flex items-center">
              <span className="text-muted mr-1">$</span>
              <input type="number" className="w-full bg-transparent focus:outline-none text-dark text-sm" placeholder="Max" defaultValue={89} />
            </div>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Rating">
        <div className="flex flex-col gap-2">
          {[5, 4, 3].map((rating) => (
            <button key={rating} className="flex items-center gap-2 group p-1.5 hover:bg-surface rounded-btn transition-colors w-full text-left">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className={i < rating ? "fill-current" : "text-border"} size={16} />
                ))}
              </div>
              <span className="text-dark font-medium">{rating === 5 ? '5.0' : `${rating}.0 & up`}</span>
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="License Type">
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary" />
            <span className="text-muted group-hover:text-dark transition-colors">Regular License</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary" />
            <span className="text-muted group-hover:text-dark transition-colors">Extended License</span>
          </label>
        </div>
      </FilterSection>

      <FilterSection title="Compatible With" defaultOpen={false}>
        <div className="flex flex-col gap-3">
          {['WordPress', 'Figma', 'Sketch', 'React', 'HTML5'].map((software) => (
            <label key={software} className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary" />
              <span className="text-muted group-hover:text-dark transition-colors">{software}</span>
            </label>
          ))}
        </div>
      </FilterSection>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-[260px] flex-shrink-0 sticky top-24 self-start h-[calc(100vh-120px)]">
        {sidebarContent}
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile Drawer */}
      <div className={`fixed top-0 left-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {sidebarContent}
      </div>
    </>
  );
};

export default FilterSidebar;
