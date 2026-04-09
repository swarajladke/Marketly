import React from 'react';
import { FiTrendingUp, FiBarChart2, FiUsers, FiEye, FiShoppingBag } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
        <h1 className="mb-1 font-heading text-3xl font-bold text-dark">Analytics</h1>
        <p className="max-w-2xl text-muted">Traffic, conversion, and product performance in a quieter, easier-to-scan layout.</p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { title: 'Page Views', value: '45.2K', icon: <FiEye size={22} />, trend: '+12%' },
          { title: 'Unique Visitors', value: '8.4K', icon: <FiUsers size={22} />, trend: '+5%' },
          { title: 'Conversion Rate', value: '3.8%', icon: <FiShoppingBag size={22} />, trend: '+0.4%' },
          { title: 'Avg. Session', value: '4m 32s', icon: <FiBarChart2 size={22} />, trend: '+18s' },
        ].map((stat) => (
          <div key={stat.title} className="dashboard-surface rounded-[24px] p-6">
            <div className="mb-5 flex items-start justify-between">
              <div className="dashboard-soft rounded-2xl p-3 text-white">{stat.icon}</div>
              <span className="flex items-center gap-1 text-sm font-medium text-emerald-400">
                <FiTrendingUp size={14} /> {stat.trend}
              </span>
            </div>
            <h3 className="mb-1 text-sm font-medium text-muted">{stat.title}</h3>
            <p className="font-heading text-2xl font-bold text-dark">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <div className="dashboard-surface xl:col-span-2 rounded-[28px] p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-dark">Traffic Overview</h2>
            <p className="mt-1 text-sm text-muted">Views and visitors over the past two weeks.</p>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.24} />
                    <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                <Tooltip
                  contentStyle={{
                    borderRadius: '14px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: '#07080A',
                    boxShadow: '0 18px 42px -28px rgba(0, 0, 0, 0.86)',
                  }}
                  labelStyle={{ fontWeight: 'bold', color: '#F8FAFC', marginBottom: '4px' }}
                />
                <Area type="monotone" dataKey="views" stroke="#60A5FA" strokeWidth={2.6} fill="url(#colorViews)" />
                <Area type="monotone" dataKey="visitors" stroke="#CBD5E1" strokeWidth={1.8} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dashboard-surface rounded-[28px] p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-dark">Top Products</h2>
            <p className="mt-1 text-sm text-muted">Highest traffic products this period.</p>
          </div>

          <div className="flex flex-col gap-4">
            {topProducts.map((product, i) => (
              <div key={product.name} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="dashboard-soft flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold text-white">{i + 1}</span>
                  <span className="text-sm font-medium text-dark">{product.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-dark">{product.views.toLocaleString()} views</p>
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
