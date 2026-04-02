import React from 'react';
import { FiStar } from 'react-icons/fi';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white p-5 border-b border-border last:border-b-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 sm:gap-0">
        <div className="flex items-center gap-3">
          <img 
            src={review.avatar} 
            alt={review.user} 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-dark text-sm leading-tight">{review.user}</h4>
            <span className="text-xs text-muted">{new Date(review.date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className={i < review.rating ? "fill-current" : "text-border"} size={14} />
          ))}
        </div>
      </div>
      <p className="text-dark text-sm leading-relaxed">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
