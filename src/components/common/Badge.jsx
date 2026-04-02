import React from 'react';

const Badge = ({ variant, children, className = '' }) => {
  const getStyles = () => {
    switch (variant) {
      case 'bestseller':
        return 'bg-primary text-white border-primary';
      case 'new':
        return 'bg-blue-500 text-white border-blue-500';
      case 'sale':
        return 'bg-red-500 text-white border-red-500';
      case 'featured':
        return 'bg-purple-500 text-white border-purple-500';
      case 'pending':
        return 'bg-yellow-500 text-white border-yellow-500';
      default:
        return 'bg-gray-200 text-dark border-gray-200';
    }
  };

  return (
    <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${getStyles()} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
