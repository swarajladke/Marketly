import React from 'react';
import {
  FiDownload,
  FiZap,
  FiCheck,
  FiArrowRight,
  FiPlay,
  FiGrid,
  FiLayers,
  FiVideo,
  FiMusic,
  FiImage,
  FiType,
  FiLayout,
  FiSmartphone,
  FiTrendingUp,
} from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { products } from '../../data/mockData';

const categories = [
  { name: 'Video Templates', icon: <FiVideo /> },
  { name: 'Music', icon: <FiMusic /> },
  { name: 'Sound Effects', icon: <FiZap /> },
  { name: 'Graphic Templates', icon: <FiLayers /> },
  { name: 'Graphics', icon: <FiImage /> },
  { name: 'Presentation Templates', icon: <FiLayout /> },
  { name: 'Photos', icon: <FiImage /> },
  { name: 'Fonts', icon: <FiType /> },
  { name: 'WordPress', icon: <FiLayout /> },
  { name: '3D', icon: <FiSmartphone /> },
];

const DashboardOverview = () => {
  useDocumentTitle('Discover - Marketly');

  const videoProducts = products.filter(p => p.category === 'Dashboard' || p.category === 'Templates').slice(0, 4);
  const graphicProducts = products.filter(p => p.category === 'Graphics' || p.category === 'Fonts').slice(0, 4);

  return (
    <DashboardLayout>
      {/* Category Strip */}
      <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="flex flex-shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold transition-all hover:bg-white/10 hover:border-white/20"
          >
            <span className="text-white/40">{cat.icon}</span>
            <span className="text-white/80">{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-[40px] bg-[#121417] p-10 lg:p-14">
          {/* Abstract Mesh Background */}
          <div className="absolute inset-0 opacity-40">
             <div className="hero-mesh h-full w-full" />
          </div>

          <div className="relative z-10">
            <h1 className="max-w-xl font-heading text-6xl font-black leading-[1.05] tracking-tight text-white lg:text-7xl">
              Unlimited <br /> 
              <span className="text-envato">creativity,</span> <br />
              all in one place.
            </h1>
            
            <p className="mt-8 max-w-[420px] text-lg font-medium leading-relaxed text-white/50">
              Get unlimited downloads of 17+ million creative assets. From themes to video templates, everything you need for your next project is right here.
            </p>

            <div className="mt-12 flex items-center gap-6">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-[#121417] bg-white/20" />
                  ))}
               </div>
               <p className="text-sm font-bold text-white/30">Trusted by 2M+ creators</p>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <aside>
          <div className="rounded-[40px] border border-white/10 bg-[#121417] p-8 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-widest text-white/30">Marketly Elements</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-heading text-5xl font-black text-white leading-none tracking-tight">$16.50</span>
              <span className="text-lg font-bold text-white/30">/mo</span>
            </div>

            <ul className="mt-10 space-y-6">
              {[
                { icon: <FiDownload />, text: 'Unlimited downloads of 17M+ assets' },
                { icon: <FiZap />, text: 'AI Design & Video tools included' },
                { icon: <FiCheck />, text: 'Simple commercial license' },
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-envato/10 text-envato">
                    {benefit.icon}
                  </div>
                  <p className="text-[15px] font-bold leading-snug text-white/80">
                    {benefit.text}
                  </p>
                </li>
              ))}
            </ul>

            <button className="mt-10 w-full rounded-2xl bg-envato py-5 text-base font-black uppercase tracking-wider text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(177,255,74,0.35)]">
              Get started
            </button>
            
            <p className="mt-6 text-center text-xs font-bold text-white/20 uppercase tracking-widest">
              Cancel anytime
            </p>
          </div>
        </aside>
      </div>

      {/* Featured Video Section */}
      <section className="mt-20">
        <div className="flex items-end justify-between border-b border-white/5 pb-6">
          <div>
            <h2 className="font-heading text-4xl font-black tracking-tight text-white">Video Templates</h2>
            <p className="mt-2 text-lg text-white/40">Highly-rated templates to level up your video projects.</p>
          </div>
          <button className="flex items-center gap-2 font-bold text-envato hover:underline">
             Browse all video
             <FiArrowRight />
          </button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videoProducts.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-white/5">
                <img src={p.previewImage} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-2 right-2 rounded-lg bg-black/60 px-2 py-1 text-xs font-bold text-white backdrop-blur">
                  {p.badge || 'New'}
                </div>
              </div>
              <h3 className="mt-4 truncate text-sm font-bold text-white group-hover:text-envato">{p.title}</h3>
              <p className="mt-1 text-xs text-white/40">by {p.createdBy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Row */}
      <section className="mt-24 grid gap-8 md:grid-cols-3">
        {[
          { title: 'Millions of assets', desc: 'Unlimited downloads of 17 million+ high-quality creative assets.', icon: <FiLayers /> },
          { title: 'Commercial license', desc: 'All assets are covered by a simple, single commercial license.', icon: <FiCheck /> },
          { title: 'New assets daily', desc: 'Fresh content added every single day to keep your work relevant.', icon: <FiTrendingUp /> },
        ].map((item, i) => (
          <div key={i} className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-envato/10 text-2xl text-envato">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/40">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Graphic Highlights */}
      <section className="mt-24">
        <div className="flex items-end justify-between border-b border-white/5 pb-6">
          <div>
            <h2 className="font-heading text-4xl font-black tracking-tight text-white">Graphic Highlights</h2>
            <p className="mt-2 text-lg text-white/40">Modern graphic templates, fonts, and assets for your brand.</p>
          </div>
          <button className="flex items-center gap-2 font-bold text-envato hover:underline">
             Browse graphics
             <FiArrowRight />
          </button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {graphicProducts.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
                <img src={p.previewImage} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-4 truncate text-sm font-bold text-white group-hover:text-envato">{p.title}</h3>
              <p className="mt-1 text-xs text-white/40">{p.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="mt-32 overflow-hidden rounded-[40px] bg-envato p-12 text-center lg:p-20">
         <h2 className="font-heading text-5xl font-black tracking-tight text-black lg:text-6xl">
           Take your projects <br /> further with Elements.
         </h2>
         <p className="mt-8 text-xl font-bold text-black/60">
           One subscription. All the assets you need.
         </p>
         <button className="mt-12 rounded-full bg-black px-12 py-5 text-lg font-black uppercase tracking-widest text-white transition-transform hover:scale-105 shadow-2xl">
           Get Marketly Elements
         </button>
      </section>
    </DashboardLayout>
  );
};

export default DashboardOverview;
