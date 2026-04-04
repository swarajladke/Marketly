import React from 'react';
import { FiPercent, FiCalendar, FiTag, FiPlus } from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const promotions = [
  { id: 1, name: 'Spring Launch Sale', discount: '20%', code: 'SPRING20', status: 'Active', expires: 'Apr 30, 2026', uses: 34 },
  { id: 2, name: 'Bundle Deal', discount: '30%', code: 'BUNDLE30', status: 'Active', expires: 'May 15, 2026', uses: 12 },
  { id: 3, name: 'Welcome Offer', discount: '15%', code: 'WELCOME15', status: 'Expired', expires: 'Mar 1, 2026', uses: 89 },
  { id: 4, name: 'Holiday Special', discount: '25%', code: 'HOLIDAY25', status: 'Scheduled', expires: 'Dec 25, 2026', uses: 0 },
];

const DashboardPromotions = () => {
  useDocumentTitle('Promotions');

  return (
    <DashboardLayout>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl text-dark mb-1">Promotions</h1>
          <p className="text-muted">Create and manage discount codes and special offers.</p>
        </div>
        <button className="self-start inline-flex items-center gap-2 rounded-btn bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark">
          <FiPlus /> Create Promo
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-card shadow-sm border border-border">
          <div className="bg-primary-light p-3 rounded-btn text-primary w-fit mb-4"><FiPercent size={22} /></div>
          <h3 className="text-muted text-sm font-medium mb-1">Active Promos</h3>
          <p className="font-heading font-bold text-2xl text-dark">2</p>
        </div>
        <div className="bg-white p-6 rounded-card shadow-sm border border-border">
          <div className="bg-primary-light p-3 rounded-btn text-primary w-fit mb-4"><FiTag size={22} /></div>
          <h3 className="text-muted text-sm font-medium mb-1">Total Redemptions</h3>
          <p className="font-heading font-bold text-2xl text-dark">135</p>
        </div>
        <div className="bg-white p-6 rounded-card shadow-sm border border-border">
          <div className="bg-primary-light p-3 rounded-btn text-primary w-fit mb-4"><FiCalendar size={22} /></div>
          <h3 className="text-muted text-sm font-medium mb-1">Scheduled</h3>
          <p className="font-heading font-bold text-2xl text-dark">1</p>
        </div>
      </div>

      <div className="bg-white rounded-card shadow-sm border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-muted text-xs">Promotion</th>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-muted text-xs">Code</th>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-muted text-xs">Discount</th>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-muted text-xs">Status</th>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-muted text-xs">Expires</th>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-muted text-xs">Uses</th>
              </tr>
            </thead>
            <tbody>
              {promotions.map((promo) => (
                <tr key={promo.id} className="border-b border-border last:border-0 hover:bg-surface/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-dark">{promo.name}</td>
                  <td className="px-6 py-4"><code className="bg-surface px-2 py-1 rounded text-primary font-mono text-xs">{promo.code}</code></td>
                  <td className="px-6 py-4 font-bold text-dark">{promo.discount}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      promo.status === 'Active' ? 'bg-green-100 text-green-700' :
                      promo.status === 'Expired' ? 'bg-red-100 text-red-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>{promo.status}</span>
                  </td>
                  <td className="px-6 py-4 text-muted">{promo.expires}</td>
                  <td className="px-6 py-4 text-muted">{promo.uses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPromotions;
