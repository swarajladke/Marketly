import React from 'react';
import { FiTrendingUp, FiBarChart2, FiUsers, FiEye, FiShoppingBag } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import DashboardLayout from '../../components/layout/DashboardLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const trafficData = Array.from({ length: 14 }, (_, i) => ({
  date: `3/${i + 15}`,
  views: 220 + (i % 5) * 95 + i * 18,
  visitors: 80 + (i % 4) * 35 + i * 6,
}));

const topProducts = [
  { name: 'Horizon Admin', views: 3420, conversion: '4.2%' },
  { name: 'Northstar Suite', views: 2810, conversion: '3.8%' },
  { name: 'Pulse UI Kit', views: 2340, conversion: '5.1%' },
  { name: 'Vector Icons', views: 1920, conversion: '2.9%' },
  { name: 'Studio Serif', views: 1540, conversion: '3.3%' },
];

const DashboardAnalytics = () => {
  useDocumentTitle('Analytics');

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="font-heading font-bold text-2xl text-dark mb-1">Analytics</h1>
        <p className="text-muted">Detailed performance insights for your store and products.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Page Views', value: '45.2K', icon: <FiEye size={22} />, trend: '+12%' },
          { title: 'Unique Visitors', value: '8.4K', icon: <FiUsers size={22} />, trend: '+5%' },
          { title: 'Conversion Rate', value: '3.8%', icon: <FiShoppingBag size={22} />, trend: '+0.4%' },
          { title: 'Avg. Session', value: '4m 32s', icon: <FiBarChart2 size={22} />, trend: '+18s' },
        ].map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-card shadow-sm border border-border">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-primary-light p-3 rounded-btn text-primary">{stat.icon}</div>
              <span className="text-sm font-medium text-green-500 flex items-center gap-1">
                <FiTrendingUp size={14} /> {stat.trend}
              </span>
            </div>
            <h3 className="text-muted text-sm font-medium mb-1">{stat.title}</h3>
            <p className="font-heading font-bold text-2xl text-dark">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 bg-white p-6 rounded-card shadow-sm border border-border">
          <h2 className="font-bold text-dark text-lg mb-6">Traffic Overview</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82B540" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#82B540" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E5E7EB' }} />
                <Area type="monotone" dataKey="views" stroke="#82B540" strokeWidth={2} fill="url(#colorViews)" />
                <Area type="monotone" dataKey="visitors" stroke="#94A3B8" strokeWidth={2} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-card shadow-sm border border-border">
          <h2 className="font-bold text-dark text-lg mb-6">Top Products</h2>
          <div className="flex flex-col gap-5">
            {topProducts.map((product, i) => (
              <div key={product.name} className="flex justify-between items-center border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 bg-primary-light rounded-btn flex items-center justify-center text-primary font-bold text-xs">{i + 1}</span>
                  <span className="font-medium text-dark text-sm">{product.name}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-dark text-sm">{product.views.toLocaleString()} views</p>
                  <span className="text-xs text-muted">{product.conversion} CVR</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardAnalytics;
