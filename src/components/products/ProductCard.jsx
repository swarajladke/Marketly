import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { FiStar, FiShoppingCart, FiArrowRight, FiClock } from 'react-icons/fi';
import Badge from '../common/Badge';
import DownloadImageButton from '../common/DownloadImageButton';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, index = 0, viewMode = 'grid', themeVariant = 'default' }) => {
  const { addToCart } = useCart();
  const isListView = viewMode === 'list';
  const isDashboardTheme = themeVariant === 'dashboard' || product.category === 'Dashboard';
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(product.lastUpdated));

  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={isListView ? { y: -2 } : { y: -5, scale: 1.008 }}
      className={`gallery-panel group rounded-[30px] text-white transition-all duration-500 ease-out ${
        isDashboardTheme ? 'hover:shadow-[0_28px_80px_-44px_rgba(0,0,0,0.9)]' : 'hover:border-primary/30 hover:shadow-neon'
      } ${
        isListView ? 'flex flex-col md:flex-row' : 'flex h-full flex-col'
      }`}
    >
      <Link
        to={`/product/${product.id}`}
        className={`gallery-frame relative m-3 block rounded-[24px] ${isListView ? 'md:w-[40%]' : 'aspect-[16/10]'}`}
      >
        <img
          src={product.previewImage}
          alt={product.title}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105 ${
            isListView ? 'min-h-[240px]' : ''
          }`}
        />
        <div className={`absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100 ${
          isDashboardTheme
            ? 'bg-[linear-gradient(180deg,rgba(56,189,248,0.03),rgba(18,18,24,0.08)_24%,rgba(0,0,0,0.78))]'
            : 'bg-[linear-gradient(180deg,rgba(255,95,218,0.05),rgba(255,43,214,0.05)_24%,rgba(0,0,0,0.72))]'
        }`} />

        {product.badge && (
          <div className="absolute left-4 top-4 z-10">
            <Badge variant={product.badge.toLowerCase()} className="shadow-lg shadow-primary/25">
              {product.badge}
            </Badge>
          </div>
        )}

        <DownloadImageButton
          imageUrl={product.previewImage}
          filename={product.title}
          label="Download image"
          iconOnly={true}
          className="absolute bottom-4 right-4 z-10 h-10 w-10 px-0 opacity-0 group-hover:opacity-100"
        />

        <div className={`gallery-chip absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-white backdrop-blur ${
          isDashboardTheme ? 'border-white/8 bg-[linear-gradient(135deg,rgba(5,6,8,0.98),rgba(9,10,14,0.96)_100%)]' : ''
        }`}>
          {product.compatibility[0]}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center p-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
          <Motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="gallery-chip flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-white shadow-2xl backdrop-blur-md transition-transform duration-300 ease-out"
          >
            Explore details
            <FiArrowRight className="text-primary transition-transform group-hover:translate-x-1" />
          </Motion.div>
        </div>
      </Link>

      <div className="relative z-[1] flex flex-1 flex-col px-6 pb-6 pt-3">
        <div className="mb-4 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] ${
              isDashboardTheme
                ? 'border-white/10 bg-white/5 text-white/70'
                : 'border-primary/15 bg-primary/10 text-primary'
            }`}>
              {product.category}
            </span>
            <span className="gallery-chip rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/58">
              {product.license === 'extended' ? 'Extended license' : 'Regular license'}
            </span>
          </div>

          <div className="flex items-start justify-between gap-3">
            <Link to={`/product/${product.id}`} className="transition-colors duration-300 hover:text-primary">
              <h3 className={`font-heading font-bold leading-tight text-white ${isListView ? 'line-clamp-2 text-2xl' : 'line-clamp-2 text-[1.55rem]'}`}>
                {product.title}
              </h3>
            </Link>
            <span className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-base font-bold text-white ${
              isDashboardTheme
                ? 'border-white/10 bg-[linear-gradient(135deg,rgba(7,8,11,0.99),rgba(12,13,18,0.98)_60%,rgba(5,6,8,0.99)_100%)] shadow-[0_16px_40px_-26px_rgba(0,0,0,0.88)]'
                : 'border-primary/15 bg-brand-gradient shadow-neon'
            }`}>
              ${product.price}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-white/56">
            <div className="flex items-center gap-1 font-bold text-white">
              <FiStar className="fill-current text-yellow-400" />
              {product.rating}
            </div>
            <span>{product.reviewCount} reviews</span>
            <span className="h-1 w-1 rounded-full bg-white/18" />
            <span>{product.sales} sales</span>
            <span className="h-1 w-1 rounded-full bg-white/18" />
            <span>Updated {formattedDate}</span>
          </div>
        </div>

        <p className={`mb-6 flex-1 text-sm leading-relaxed text-white/66 ${isListView ? 'line-clamp-3 max-w-2xl' : 'line-clamp-3'}`}>
          {product.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {product.tags.slice(0, isListView ? 4 : 3).map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-3 py-1 text-[11px] font-medium text-white/62 transition-colors group-hover:text-white ${
                isDashboardTheme
                  ? 'border-white/8 bg-[linear-gradient(135deg,rgba(7,8,11,0.98),rgba(12,13,18,0.98)_100%)] group-hover:border-white/16'
                  : 'border-primary/12 bg-[linear-gradient(135deg,rgba(255,95,218,0.08),rgba(255,43,214,0.06)_100%)] group-hover:border-primary/30'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`gallery-chip mt-auto rounded-[24px] px-4 py-4 ${isDashboardTheme ? 'border-white/8 bg-[linear-gradient(135deg,rgba(6,7,10,0.99),rgba(10,11,15,0.98)_100%)]' : ''} ${isListView ? 'flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between' : 'flex items-center justify-between gap-3'}`}>
          <div className={`flex ${isListView ? 'flex-wrap gap-x-5 gap-y-2' : 'flex-col gap-2'} text-xs text-white/52`}>
            <span className="flex items-center gap-2 font-bold uppercase tracking-[0.18em] text-white/78">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {product.createdBy}
            </span>
            <div className={`flex ${isListView ? 'flex-wrap gap-x-5 gap-y-2' : 'flex-wrap gap-2'}`}>
              <span className="flex items-center gap-1">
                <FiClock className="text-primary" />
                Updated {formattedDate}
              </span>
              <span>{product.fileSize}</span>
              {isListView && <span>{product.compatibility.join(' / ')}</span>}
            </div>
          </div>

          <Motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            onClick={(event) => {
              event.preventDefault();
              addToCart(product);
            }}
            className={`flex items-center justify-center gap-2 rounded-2xl border transition-all duration-500 ease-out ${
              isDashboardTheme
                ? 'border-white/10 bg-white/5 text-white hover:bg-white/10 hover:shadow-[0_14px_30px_-22px_rgba(0,0,0,0.86)]'
                : 'border-primary/20 bg-primary/12 text-primary hover:bg-brand-gradient hover:text-white hover:shadow-neon'
            } ${
              isListView ? 'self-start px-4 py-3 text-sm font-bold' : 'h-10 w-10'
            }`}
          >
            <FiShoppingCart size={18} />
            {isListView && <span>Add to cart</span>}
          </Motion.button>
        </div>
      </div>
    </Motion.div>
  );
};

export default ProductCard;
