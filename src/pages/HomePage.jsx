import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiChevronDown, FiLayout, FiCode, FiLayers, FiSmartphone, FiType, FiImage, FiPenTool, FiMonitor, FiCheckCircle, FiShoppingCart, FiDownload } from 'react-icons/fi';
import { categories, products, sellers } from '../data/mockData';
import ProductCard from '../components/products/ProductCard';
import SellerCard from '../components/products/SellerCard';

const iconMap = {
  FiLayout: <FiLayout />,
  FiCode: <FiCode />,
  FiLayers: <FiLayers />,
  FiSmartphone: <FiSmartphone />,
  FiType: <FiType />,
  FiImage: <FiImage />,
  FiPenTool: <FiPenTool />,
  FiMonitor: <FiMonitor />
};

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const trendingProducts = products.slice(0, 8);
  const newArrivals = products.slice(8, 16);
  
  const stripCategories = [{ id: 'all', name: 'All', icon: null }, ...categories];

  return (
    <div className="w-full bg-surface">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-dark leading-tight mb-6 max-w-4xl mx-auto">
            Professional assets for your next project.
          </h1>
          <p className="font-body text-lg text-muted mb-10 max-w-2xl mx-auto">
            Discover thousands of high-quality themes, templates, and UI kits crafted by top industry professionals.
          </p>
          
          {/* Main Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-btn p-1.5 flex items-center shadow-sm border border-border mb-12 focus-within:border-primary transition-colors">
            <div className="hidden md:flex items-center gap-2 pl-4 pr-3 border-r border-border text-dark text-sm font-medium whitespace-nowrap cursor-pointer">
              <span>All Categories</span>
              <FiChevronDown />
            </div>
            <div className="flex-1 flex items-center px-4">
              <FiSearch className="text-muted mr-3" size={18} />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-full bg-transparent focus:outline-none text-dark"
              />
            </div>
            <button className="bg-primary hover:bg-primary-dark transition-colors text-white px-8 py-2.5 rounded text-sm font-bold">
              Search
            </button>
          </div>

          {/* Trust Metrics */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-dark border-t border-border pt-10 mt-10">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold font-heading mb-1">50,000+</span>
              <span className="text-muted text-xs font-semibold uppercase tracking-wider">Premium Products</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold font-heading mb-1">200,000+</span>
              <span className="text-muted text-xs font-semibold uppercase tracking-wider">Active Customers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold font-heading mb-1">$10M+</span>
              <span className="text-muted text-xs font-semibold uppercase tracking-wider">Creator Payouts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Strip */}
      <section className="bg-white sticky top-0 z-40 lg:top-16 shadow-[0_1px_2px_rgba(0,0,0,0.05)] border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto py-3 px-4 scrollbar-hide">
            {stripCategories.map(cat => (
              <button
                key={cat.id || cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-2 rounded-btn text-sm font-medium transition-colors ${
                  activeCategory === cat.name 
                  ? 'bg-primary text-white' 
                  : 'bg-surface text-dark hover:bg-border'
                }`}
              >
                {cat.icon && <span className={activeCategory === cat.name ? "text-white" : "text-muted"}>{iconMap[cat.icon]}</span>}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
            <div>
              <h2 className="font-heading font-bold text-2xl text-dark">Trending This Week</h2>
              <p className="text-sm text-muted mt-1">The most popular assets right now.</p>
            </div>
            <Link to="/browse?sort=trending" className="text-primary text-sm font-bold hover:underline mb-1 hidden sm:block">
              Browse All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition / How It Works */}
      <section className="py-20 bg-white border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-2xl text-dark mb-12">Built for Professionals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center text-primary mb-5 border border-border">
                <FiCheckCircle size={24} />
              </div>
              <h3 className="font-bold text-base mb-2 text-dark">Quality Assured</h3>
              <p className="text-sm text-muted">Every asset is manually reviewed by our expert team to ensure code and design quality.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center text-primary mb-5 border border-border">
                <FiShoppingCart size={24} />
              </div>
              <h3 className="font-bold text-base mb-2 text-dark">Simple Licensing</h3>
              <p className="text-sm text-muted">Clear, straightforward licenses. Use for personal projects or commercial deliverables seamlessly.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center text-primary mb-5 border border-border">
                <FiDownload size={24} />
              </div>
              <h3 className="font-bold text-base mb-2 text-dark">Instant Access</h3>
              <p className="text-sm text-muted">Download your files immediately after purchase and get free lifetime updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sellers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
            <div>
              <h2 className="font-heading font-bold text-2xl text-dark">Top Creators</h2>
              <p className="text-sm text-muted mt-1">Discover assets from our highest-rated authors.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sellers.slice(0, 4).map(seller => (
              <SellerCard key={seller.id} seller={seller} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
            <div>
              <h2 className="font-heading font-bold text-2xl text-dark">Fresh Additions</h2>
              <p className="text-sm text-muted mt-1">The latest tools and templates uploaded to Marketly.</p>
            </div>
            <Link to="/browse?sort=newest" className="text-primary text-sm font-bold hover:underline mb-1 hidden sm:block">
              Browse All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Pre-Footer CTA */}
      <section className="py-20 bg-dark text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading font-bold text-3xl mb-4">Start selling your work today.</h2>
          <p className="text-white/70 text-lg mb-8">Reach millions of buyers. We offer the industry's most competitive commission rates for exclusive authors.</p>
          <Link to="/register" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-btn transition-colors shadow-sm text-sm">
            Become an Author
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
