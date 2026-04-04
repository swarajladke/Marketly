import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex overflow-x-auto rounded-[24px] border border-border bg-surface p-1.5 scrollbar-hide">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`relative whitespace-nowrap rounded-[18px] px-5 py-3 text-sm font-bold transition-colors ${
              activeTab === index
                ? 'bg-white text-dark shadow-sm'
                : 'text-muted hover:text-dark'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
            {activeTab === index && (
              <div className="absolute inset-x-6 bottom-1 h-[3px] rounded-full bg-primary"></div>
            )}
          </button>
        ))}
      </div>
      <div className="py-8">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
