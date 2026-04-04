import React from 'react';
import { FiStar, FiMessageSquare } from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { reviews } from '../../data/mockData';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const DashboardReviews = () => {
  useDocumentTitle('Reviews');

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="font-heading font-bold text-2xl text-dark mb-1">Reviews</h1>
        <p className="text-muted">Customer feedback and ratings for your products.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-card shadow-sm border border-border text-center">
          <p className="font-heading text-4xl font-bold text-dark">4.8</p>
          <div className="flex justify-center gap-1 mt-2 text-yellow-400">
            {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current" size={16} />)}
          </div>
          <p className="text-sm text-muted mt-2">Average Rating</p>
        </div>
        <div className="bg-white p-6 rounded-card shadow-sm border border-border text-center">
          <p className="font-heading text-4xl font-bold text-dark">{reviews.length}</p>
          <p className="text-sm text-muted mt-2">Total Reviews</p>
        </div>
        <div className="bg-white p-6 rounded-card shadow-sm border border-border text-center">
          <p className="font-heading text-4xl font-bold text-primary">4</p>
          <p className="text-sm text-muted mt-2">Pending Response</p>
        </div>
      </div>

      <div className="bg-white rounded-card shadow-sm border border-border">
        <div className="p-6 border-b border-border">
          <h2 className="font-bold text-dark text-lg">Recent Reviews</h2>
        </div>
        <div className="divide-y divide-border">
          {reviews.map((review) => (
            <div key={review.id} className="p-6 hover:bg-surface/50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <img src={review.avatar} alt={review.user} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-dark">{review.user}</span>
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => <FiStar key={i} className="fill-current" size={12} />)}
                      </div>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{review.comment}</p>
                    <p className="text-xs text-muted mt-2">{new Date(review.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <button className="p-2 text-muted hover:text-primary transition-colors flex-shrink-0" title="Reply">
                  <FiMessageSquare size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardReviews;
