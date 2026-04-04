import React from 'react';
import { FiDollarSign, FiTrendingUp, FiCreditCard, FiCalendar } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardLayout from '../../components/layout/DashboardLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const earningsData = Array.from({ length: 12 }, (_, i) => ({
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
  earnings: 800 + (i % 4) * 420 + i * 85,
}));

const DashboardEarnings = () => {
  useDocumentTitle('Earnings');

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="font-heading font-bold text-2xl text-dark mb-1">Earnings</h1>
        <p className="text-muted">Track your revenue, payouts, and earning trends over time.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Earnings', value: '$24,680', icon: <FiDollarSign size={22} />, trend: '+18.2%' },
          { title: 'This Month', value: '$3,240', icon: <FiTrendingUp size={22} />, trend: '+8.5%' },
          { title: 'Pending Payout', value: '$1,890', icon: <FiCreditCard size={22} />, trend: 'Next: Apr 15' },
          { title: 'Avg. Sale Value', value: '$42', icon: <FiCalendar size={22} />, trend: '+$3' },
        ].map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-card shadow-sm border border-border">
            <div className="bg-primary-light p-3 rounded-btn text-primary w-fit mb-4">{stat.icon}</div>
            <h3 className="text-muted text-sm font-medium mb-1">{stat.title}</h3>
            <p className="font-heading font-bold text-2xl text-dark">{stat.value}</p>
            <p className="text-xs text-green-500 font-medium mt-2">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-card shadow-sm border border-border">
        <h2 className="font-bold text-dark text-lg mb-6">Monthly Earnings</h2>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={earningsData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82B540" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#82B540" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} tickFormatter={(v) => `$${v}`} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #E5E7EB' }} />
              <Area type="monotone" dataKey="earnings" stroke="#82B540" strokeWidth={3} fill="url(#colorEarnings)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardEarnings;
