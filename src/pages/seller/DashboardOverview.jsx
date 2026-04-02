import React from 'react';
import { FiDollarSign, FiShoppingBag, FiEye, FiBox, FiTrendingUp } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { revenueData, orders } from '../../data/mockData';
import DashboardLayout from '../../components/layout/DashboardLayout';

const StatCard = ({ title, value, icon, trend, isPositive }) => (
  <div className="bg-white p-6 rounded-card shadow-sm border border-border">
    <div className="flex justify-between items-start mb-4">
      <div className="bg-primary-light p-3 rounded-btn text-primary">
        {icon}
      </div>
      <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        <FiTrendingUp className={!isPositive && 'rotate-180'} />
        {trend}
      </div>
    </div>
    <div>
      <h3 className="text-muted text-sm font-medium mb-1">{title}</h3>
      <p className="font-heading font-bold text-2xl text-dark">{value}</p>
    </div>
  </div>
);

const DashboardOverview = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="font-heading font-bold text-2xl text-dark mb-1">Dashboard Overview</h1>
        <p className="text-muted">Welcome back, Alex! Here's what's happening with your store today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Revenue" 
          value="$12,450" 
          icon={<FiDollarSign size={24} />} 
          trend="+12.5%" 
          isPositive={true} 
        />
        <StatCard 
          title="Items Sold" 
          value="84" 
          icon={<FiShoppingBag size={24} />} 
          trend="+5.2%" 
          isPositive={true} 
        />
        <StatCard 
          title="Total Views" 
          value="45.2K" 
          icon={<FiEye size={24} />} 
          trend="-2.4%" 
          isPositive={false} 
        />
        <StatCard 
          title="Active Products" 
          value="12" 
          icon={<FiBox size={24} />} 
          trend="+1" 
          isPositive={true} 
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Chart Area */}
        <div className="xl:col-span-2 bg-white p-6 rounded-card shadow-sm border border-border">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-dark text-lg">Revenue Overview</h2>
            <select className="bg-surface border border-border text-sm rounded px-3 py-1.5 focus:outline-none focus:border-primary text-dark font-medium cursor-pointer">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82B540" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#82B540" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}
                  itemStyle={{ color: '#82B540', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#82B540" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Orders table - styled as a sidebar list on smaller screens */}
        <div className="bg-white p-6 rounded-card shadow-sm border border-border">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-dark text-lg">Recent Orders</h2>
            <button className="text-primary text-sm font-medium hover:underline">View All</button>
          </div>
          
          <div className="flex flex-col gap-5">
            {orders.map((order) => (
              <div key={order.id} className="flex justify-between items-center border-b border-border pb-5 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-light rounded-btn flex items-center justify-center text-primary font-bold">
                    {order.buyer.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-sm leading-none mb-1.5 text-ellipsis overflow-hidden whitespace-nowrap max-w-[120px] sm:max-w-[160px] xl:max-w-[100px]">{order.product}</h4>
                    <span className="text-xs text-muted font-medium">{new Date(order.date).toLocaleDateString()} • {order.buyer}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-dark mb-1.5 text-sm">${order.price}</div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    order.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardOverview;
