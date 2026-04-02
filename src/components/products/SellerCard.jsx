import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiCheckCircle } from 'react-icons/fi';

const SellerCard = ({ seller }) => {
  return (
    <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-shadow duration-300 p-5 flex flex-col items-center text-center h-full">
      {/* Avatar Container */}
      <div className="relative mb-4">
        <img 
          src={seller.avatar} 
          alt={seller.name} 
          className="w-14 h-14 rounded-full object-cover ring-2 ring-surface border border-border"
        />
        {seller.verified && (
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[1px]">
            <FiCheckCircle className="text-primary fill-white" size={16} />
          </div>
        )}
      </div>
      
      {/* Name and Badge */}
      <h3 className="font-bold text-dark text-lg leading-tight mb-1 line-clamp-1">{seller.name}</h3>
      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary-light px-2 py-0.5 rounded-full mb-4">
        Top Seller
      </span>
      
      {/* Stats */}
      <div className="flex items-center justify-center gap-4 text-sm mb-5 w-full">
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-1">
            <FiStar className="text-yellow-400 fill-yellow-400" size={14} />
            <span className="font-bold text-dark">{seller.rating}</span>
          </div>
          <span className="text-xs text-muted">Rating</span>
        </div>
        <div className="h-6 w-px bg-border"></div>
        <div className="flex flex-col">
          <span className="font-bold text-dark">{seller.totalSales.toLocaleString()}</span>
          <span className="text-xs text-muted">Sales</span>
        </div>
      </div>
      
      {/* Action Button */}
      <Link 
        to={`/seller/${seller.id}`} 
        className="mt-auto w-full py-2 px-4 rounded-btn border border-border text-dark font-medium text-sm hover:border-primary hover:text-primary transition-colors flex justify-center items-center"
      >
        View Profile
      </Link>
    </div>
  );
};

export default SellerCard;
