import React, { useState } from 'react';
import { FiGrid, FiList, FiFilter, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import FilterSidebar from '../components/products/FilterSidebar';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/mockData';

const BrowsePage = () => {
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  return (
    <div className="bg-surface min-h-screen py-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar */}
        <FilterSidebar isMobileOpen={isMobileFilterOpen} setMobileOpen={setMobileFilterOpen} />

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Bar */}
          <div className="bg-white rounded-card shadow-sm border border-border p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <button 
                className="lg:hidden flex items-center gap-2 bg-surface px-4 py-2 rounded-btn font-medium text-dark hover:text-primary transition-colors border border-border"
                onClick={() => setMobileFilterOpen(true)}
              >
                <FiFilter /> Filters
              </button>
              <span className="text-muted font-medium">Showing 1,240 results</span>
            </div>

            <div className="flex items-center gap-4 self-end sm:self-auto w-full sm:w-auto justify-between sm:justify-start">
              <div className="flex items-center gap-2 flex-1 sm:flex-none">
                <span className="text-muted text-sm hidden sm:block">Sort by:</span>
                <select className="w-full sm:w-auto bg-surface border border-border text-dark rounded-btn px-3 py-1.5 focus:outline-none focus:border-primary font-medium text-sm cursor-pointer">
                  <option>Popular</option>
                  <option>Newest</option>
                  <option>Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>

              <div className="hidden sm:flex items-center bg-surface border border-border rounded-btn p-1">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-btn transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-primary' : 'text-muted hover:text-dark'}`}
                  title="Grid View"
                >
                  <FiGrid size={18} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-btn transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-primary' : 'text-muted hover:text-dark'}`}
                  title="List View"
                >
                  <FiList size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'}`}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center gap-2">
            <button className="w-10 h-10 rounded-btn bg-white border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors" disabled>
              <FiChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-btn bg-primary text-white font-bold shadow-sm">
              1
            </button>
            <button className="w-10 h-10 rounded-btn bg-white border border-border text-dark font-medium hover:text-primary hover:border-primary transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-btn bg-white border border-border text-dark font-medium hover:text-primary hover:border-primary transition-colors">
              3
            </button>
            <span className="text-muted mx-1">...</span>
            <button className="w-10 h-10 rounded-btn bg-white border border-border text-dark font-medium hover:text-primary hover:border-primary transition-colors">
              12
            </button>
            <button className="w-10 h-10 rounded-btn bg-white border border-border flex items-center justify-center text-dark hover:text-primary hover:border-primary transition-colors">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
