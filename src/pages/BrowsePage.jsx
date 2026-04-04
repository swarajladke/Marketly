import React, { useState } from 'react';
import {
  FiGrid,
  FiList,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
  FiTrendingUp,
  FiX,
  FiArrowUpRight,
  FiCompass,
  FiLayers,
} from 'react-icons/fi';
import FilterSidebar from '../components/products/FilterSidebar';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/mockData';
import useDocumentTitle from '../hooks/useDocumentTitle';

const sortOptions = [
  { value: 'featured', label: 'Featured first' },
  { value: 'newest', label: 'Newest updates' },
  { value: 'rating', label: 'Highest rated' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

const priceRangeLabels = {
  'under-25': 'Under $25',
  '25-50': '$25 - $50',
  '50-75': '$50 - $75',
  '75+': '$75+',
};

const featuredCollections = [
  {
    title: 'Launch Week',
    caption: 'High-converting landing kits with bold editorial pacing.',
    accent: 'from-[#8dd76a] via-[#7ab73b] to-[#355923]',
  },
  {
    title: 'Studio Systems',
    caption: 'Sharper UI kits and admin flows for product teams.',
    accent: 'from-[#86c8ff] via-[#477dbd] to-[#1f365a]',
  },
  {
    title: 'Brand Atmosphere',
    caption: 'Fonts, graphics, and storefront assets with stronger presence.',
    accent: 'from-[#ffcf8a] via-[#ff9860] to-[#7a3723]',
  },
];

const getPriceRangeMatch = (price, priceRange) => {
  switch (priceRange) {
    case 'under-25':
      return price < 25;
    case '25-50':
      return price >= 25 && price <= 50;
    case '50-75':
      return price > 50 && price <= 75;
    case '75+':
      return price > 75;
    default:
      return true;
  }
};

const BrowsePage = () => {
  useDocumentTitle('Browse Catalog');
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: 'all',
    rating: null,
    license: 'all',
    compatibility: [],
  });

  const toggleCategory = (category) => {
    setFilters((current) => ({
      ...current,
      category: category === current.category ? 'All' : category,
    }));
  };

  const setPriceRange = (priceRange) => {
    setFilters((current) => ({ ...current, priceRange }));
  };

  const setRating = (rating) => {
    setFilters((current) => ({ ...current, rating }));
  };

  const setLicense = (license) => {
    setFilters((current) => ({ ...current, license }));
  };

  const toggleCompatibility = (compatibility) => {
    setFilters((current) => ({
      ...current,
      compatibility: current.compatibility.includes(compatibility)
        ? current.compatibility.filter((item) => item !== compatibility)
        : [...current.compatibility, compatibility],
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'All',
      priceRange: 'all',
      rating: null,
      license: 'all',
      compatibility: [],
    });
  };

  const filteredProducts = products
    .filter((product) => filters.category === 'All' || product.category === filters.category)
    .filter((product) => getPriceRangeMatch(product.price, filters.priceRange))
    .filter((product) => !filters.rating || Number(product.rating) >= filters.rating)
    .filter((product) => filters.license === 'all' || product.license === filters.license)
    .filter(
      (product) =>
        filters.compatibility.length === 0 ||
        filters.compatibility.some((item) => product.compatibility.includes(item)),
    );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      case 'rating':
        return Number(b.rating) - Number(a.rating);
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      default:
        return (b.badge === 'Bestseller') - (a.badge === 'Bestseller') || b.sales - a.sales;
    }
  });

  const activeFilters = [
    filters.category !== 'All'
      ? { key: 'category', label: filters.category, clear: () => toggleCategory(filters.category) }
      : null,
    filters.priceRange !== 'all'
      ? { key: 'price', label: priceRangeLabels[filters.priceRange], clear: () => setPriceRange('all') }
      : null,
    filters.rating
      ? { key: 'rating', label: `${filters.rating}.0 and up`, clear: () => setRating(null) }
      : null,
    filters.license !== 'all'
      ? {
          key: 'license',
          label: `${filters.license === 'extended' ? 'Extended' : 'Regular'} license`,
          clear: () => setLicense('all'),
        }
      : null,
    ...filters.compatibility.map((item) => ({
      key: `compatibility-${item}`,
      label: item,
      clear: () => toggleCompatibility(item),
    })),
  ].filter(Boolean);

  const curatedDrops = sortedProducts.slice(0, 3);

  return (
    <div className="relative min-h-screen overflow-hidden bg-surface py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] overflow-hidden">
        <div className="absolute left-[-8%] top-[-16%] h-72 w-72 rounded-full bg-[#9fdc76]/25 blur-3xl" />
        <div className="absolute right-[-8%] top-24 h-80 w-80 rounded-full bg-[#74b9ff]/18 blur-3xl" />
        <div className="absolute left-1/3 top-40 h-64 w-64 rounded-full bg-[#ffb470]/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto flex flex-col gap-8 px-4 lg:flex-row">
        <FilterSidebar
          isMobileOpen={isMobileFilterOpen}
          setMobileOpen={setMobileFilterOpen}
          filters={filters}
          toggleCategory={toggleCategory}
          setPriceRange={setPriceRange}
          setRating={setRating}
          setLicense={setLicense}
          toggleCompatibility={toggleCompatibility}
          clearFilters={clearFilters}
          resultCount={sortedProducts.length}
        />

        <div className="flex-1">
          <section className="relative overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(135deg,#fbfdf8,#eef6ff_55%,#f8fbff)] px-6 py-8 text-dark shadow-[0_28px_70px_-42px_rgba(15,23,42,0.28)] sm:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(143,222,112,0.18),_transparent_32%),radial-gradient(circle_at_85%_18%,_rgba(116,185,255,0.16),_transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.08))]" />
            <div className="absolute inset-y-0 right-0 w-[42%] bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.38),transparent)]" />

            <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">
                  Discover the catalog
                </p>
                <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-dark sm:text-5xl">
                  Browse with more color, stronger curation, and a livelier sense of discovery.
                </h1>
                <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
                  Jump between premium storefront kits, launch-ready templates, and productized systems in a layout that feels more like a magazine spread than a plain catalog.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    { icon: <FiCompass />, label: 'Discovery-led browsing' },
                    { icon: <FiLayers />, label: 'Editorial collections' },
                    { icon: <FiTrendingUp />, label: 'Top-performing assets' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-900/8 bg-white/80 px-4 py-2 text-sm text-dark shadow-sm backdrop-blur"
                    >
                      <span className="text-primary">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 xl:grid-cols-[0.72fr_1fr]">
                <div className="rounded-[28px] border border-slate-900/8 bg-white/75 p-5 shadow-sm backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.26em] text-muted">Catalog pulse</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                    {[
                      { label: 'Available now', value: `${products.length}+` },
                      { label: 'Top rating', value: '4.9/5' },
                      { label: 'Fresh updates', value: 'Weekly' },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-slate-900/8 bg-white/85 p-4">
                        <div className="text-xs font-bold uppercase tracking-[0.24em] text-muted">{item.label}</div>
                        <div className="mt-2 font-heading text-2xl font-bold text-dark">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  {featuredCollections.map((collection, index) => (
                    <div
                      key={collection.title}
                      className={`group relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br ${collection.accent} p-5 shadow-[0_24px_50px_-32px_rgba(0,0,0,0.55)]`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.22),_transparent_32%)]" />
                      <div className="relative flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-white/70">
                            {index === 0 ? 'Featured drop' : index === 1 ? 'Staff cue' : 'Fresh energy'}
                          </p>
                          <h2 className="mt-2 font-heading text-2xl font-bold text-white">
                            {collection.title}
                          </h2>
                          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/82">
                            {collection.caption}
                          </p>
                        </div>
                        <div className="rounded-full border border-white/20 bg-white/12 p-3 text-white backdrop-blur">
                          <FiArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {curatedDrops.length > 0 && (
            <section className="mt-6 grid gap-4 xl:grid-cols-[0.95fr_2.05fr]">
              <div className="rounded-[28px] border border-slate-900/8 bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Curated drops</p>
                <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-dark">
                  A brighter lane between trending products and everyday browsing.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  Use this strip to spotlight one or two moods before the main grid starts. It helps the page feel designed, not endlessly repeated.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {curatedDrops.map((product, index) => (
                  <div
                    key={product.id}
                    className={`group relative overflow-hidden rounded-[28px] border border-white/60 p-5 shadow-sm ${
                      index === 0
                        ? 'bg-[linear-gradient(135deg,#0d162a,#172d50)] text-white'
                        : index === 1
                          ? 'bg-[linear-gradient(135deg,#f5fbef,#ffffff)]'
                          : 'bg-[linear-gradient(135deg,#fff5ea,#ffffff)]'
                    }`}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_35%)]" />
                    </div>
                    <div className="relative">
                      <div className="overflow-hidden rounded-[22px]">
                        <img
                          src={product.previewImage}
                          alt={product.title}
                          className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] ${
                          index === 0 ? 'bg-white/12 text-white' : 'bg-primary/10 text-primary'
                        }`}>
                          {product.category}
                        </span>
                        <span className={`text-sm font-bold ${index === 0 ? 'text-white/80' : 'text-muted'}`}>
                          ${product.price}
                        </span>
                      </div>
                      <h3 className={`mt-3 font-heading text-2xl font-bold leading-tight ${index === 0 ? 'text-white' : 'text-dark'}`}>
                        {product.title}
                      </h3>
                      <p className={`mt-2 line-clamp-2 text-sm leading-relaxed ${index === 0 ? 'text-white/78' : 'text-muted'}`}>
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="mt-6 rounded-[28px] border border-border bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-4">
                <button
                  className="flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-2 font-medium text-dark transition-colors hover:text-primary lg:hidden"
                  onClick={() => setMobileFilterOpen(true)}
                >
                  <FiFilter /> Filters
                </button>
                <div>
                  <div className="flex items-center gap-2 text-dark">
                    <FiTrendingUp className="text-primary" />
                    <span className="text-sm font-bold uppercase tracking-[0.22em]">Merchandise view</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    Showing {sortedProducts.length} curated results
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between xl:justify-end">
                <div className="flex items-center gap-2">
                  <span className="hidden text-sm text-muted sm:block">Sort by</span>
                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2 text-sm font-medium text-dark focus:border-primary focus:outline-none sm:w-auto"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="hidden items-center rounded-2xl border border-border bg-surface p-1 sm:flex">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`rounded-xl p-2 transition-colors ${viewMode === 'grid' ? 'bg-white text-primary shadow-sm' : 'text-muted hover:text-dark'}`}
                    title="Grid view"
                  >
                    <FiGrid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`rounded-xl p-2 transition-colors ${viewMode === 'list' ? 'bg-white text-primary shadow-sm' : 'text-muted hover:text-dark'}`}
                    title="List view"
                  >
                    <FiList size={18} />
                  </button>
                </div>
              </div>
            </div>

            {activeFilters.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                {activeFilters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={filter.clear}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-dark transition-colors hover:border-primary/40"
                  >
                    {filter.label}
                    <FiX className="text-primary" />
                  </button>
                ))}
                <button onClick={clearFilters} className="text-sm font-medium text-primary hover:underline">
                  Clear all
                </button>
              </div>
            )}
          </div>

          <div className="mt-6 overflow-hidden rounded-[28px] border border-slate-900/8 bg-white shadow-sm">
            <div className="grid gap-4 px-4 py-5 md:grid-cols-[1.1fr_0.9fr] md:px-6">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                <span className="font-bold uppercase tracking-[0.22em] text-dark">Popular cues</span>
                {['React-ready', 'Polished checkout', 'Editorial landing pages', 'Admin dashboards'].map((cue) => (
                  <span key={cue} className="rounded-full bg-surface px-3 py-1.5">
                    {cue}
                  </span>
                ))}
              </div>

              <div className="rounded-[22px] bg-[linear-gradient(135deg,#10203a,#183868)] px-5 py-4 text-white">
                <p className="text-[11px] font-black uppercase tracking-[0.26em] text-white/60">Visual momentum</p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Alternate soft white product surfaces with one darker promotional block to keep the results area feeling vibrant and paced.
                </p>
              </div>
            </div>
          </div>

          <div className={`mt-6 grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
            {sortedProducts.map((product, index) => (
              <div
                key={product.id}
                className={viewMode === 'grid' && (index === 0 || (index === 5 && sortedProducts.length > 5)) ? 'xl:col-span-2' : ''}
              >
                <ProductCard product={product} index={index} viewMode={viewMode} />
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="mt-6 rounded-[28px] border border-dashed border-border bg-white px-8 py-14 text-center">
              <h2 className="font-heading text-2xl font-bold text-dark">No products match this filter mix.</h2>
              <p className="mt-3 text-muted">
                Try clearing one or two filters to widen the catalog again.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 rounded-2xl bg-primary px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-white"
              >
                Reset filters
              </button>
            </div>
          )}

          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white text-muted transition-colors hover:border-primary hover:text-primary" disabled>
              <FiChevronLeft size={20} />
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary font-bold text-white shadow-sm">
              1
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white font-medium text-dark transition-colors hover:border-primary hover:text-primary">
              2
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white font-medium text-dark transition-colors hover:border-primary hover:text-primary">
              3
            </button>
            <span className="mx-1 text-muted">...</span>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white font-medium text-dark transition-colors hover:border-primary hover:text-primary">
              6
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white text-dark transition-colors hover:border-primary hover:text-primary">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
