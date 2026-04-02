import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex overflow-x-auto border-b border-border scrollbar-hide">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`whitespace-nowrap px-6 py-4 font-bold text-sm transition-colors relative ${
              activeTab === index ? 'text-primary' : 'text-muted hover:text-dark'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
            {activeTab === index && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-t-full"></div>
            )}
          </button>
        ))}
      </div>
      <div className="py-6">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
