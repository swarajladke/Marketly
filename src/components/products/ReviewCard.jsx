import React from 'react';
import { FiStar } from 'react-icons/fi';

const ReviewCard = ({ review }) => {
  return (
    <div className="rounded-[24px] border border-border bg-white p-5 shadow-sm">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-0">
        <div className="flex items-center gap-3">
          <img 
            src={review.avatar} 
            alt={review.user} 
            className="h-11 w-11 rounded-full object-cover ring-2 ring-surface"
          />
          <div>
            <h4 className="font-heading text-lg font-bold leading-tight text-dark">{review.user}</h4>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className={i < review.rating ? "fill-current" : "text-border"} size={14} />
          ))}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-dark">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
