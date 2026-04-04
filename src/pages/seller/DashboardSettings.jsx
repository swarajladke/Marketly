import React from 'react';
import { FiSave, FiGlobe, FiMail, FiLock, FiBell, FiCreditCard } from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const DashboardSettings = () => {
  useDocumentTitle('Store Settings');

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="font-heading font-bold text-2xl text-dark mb-1">Store Settings</h1>
        <p className="text-muted">Manage your store profile, notifications, and payment preferences.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.75fr]">
        <div className="space-y-6">
          {/* Store Profile */}
          <div className="bg-white p-6 rounded-card shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6">
              <FiGlobe className="text-primary" size={20} />
              <h2 className="font-bold text-dark text-lg">Store Profile</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Store Name</label>
                <input type="text" defaultValue="Marketly Studio" className="w-full bg-surface border border-border rounded-btn px-4 py-3 text-dark focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Store Description</label>
                <textarea rows="3" defaultValue="Productized design assets, polished storefront systems, and UI work made to look premium from the first click." className="w-full bg-surface border border-border rounded-btn px-4 py-3 text-dark focus:outline-none focus:border-primary resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Support Email</label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                  <input type="email" defaultValue="support@marketly.studio" className="w-full bg-surface border border-border rounded-btn pl-10 pr-4 py-3 text-dark focus:outline-none focus:border-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white p-6 rounded-card shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6">
              <FiLock className="text-primary" size={20} />
              <h2 className="font-bold text-dark text-lg">Security</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Current Password</label>
                <input type="password" className="w-full bg-surface border border-border rounded-btn px-4 py-3 text-dark focus:outline-none focus:border-primary" placeholder="Enter current password" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">New Password</label>
                <input type="password" className="w-full bg-surface border border-border rounded-btn px-4 py-3 text-dark focus:outline-none focus:border-primary" placeholder="Enter new password" />
              </div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="accent-primary h-4 w-4" />
                <span className="text-sm text-dark">Enable two-factor authentication</span>
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-white p-6 rounded-card shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6">
              <FiBell className="text-primary" size={20} />
              <h2 className="font-bold text-dark text-lg">Notifications</h2>
            </div>
            <div className="space-y-4">
              {[
                { label: 'New sale alerts', desc: 'Get notified when a product sells', checked: true },
                { label: 'Review notifications', desc: 'New reviews on your products', checked: true },
                { label: 'Weekly summary', desc: 'Performance digest every Monday', checked: false },
                { label: 'Marketing updates', desc: 'Platform news and opportunities', checked: false },
              ].map((item) => (
                <label key={item.label} className="flex items-start justify-between gap-4 cursor-pointer border-b border-border pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-dark text-sm">{item.label}</p>
                    <p className="text-xs text-muted mt-1">{item.desc}</p>
                  </div>
                  <input type="checkbox" defaultChecked={item.checked} className="mt-1 accent-primary h-4 w-4" />
                </label>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white p-6 rounded-card shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6">
              <FiCreditCard className="text-primary" size={20} />
              <h2 className="font-bold text-dark text-lg">Payment</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Payout Method</label>
                <select className="w-full bg-surface border border-border rounded-btn px-4 py-3 text-dark focus:outline-none focus:border-primary">
                  <option>Bank Transfer</option>
                  <option>PayPal</option>
                  <option>Stripe</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Payout Schedule</label>
                <select className="w-full bg-surface border border-border rounded-btn px-4 py-3 text-dark focus:outline-none focus:border-primary">
                  <option>Monthly (15th)</option>
                  <option>Bi-weekly</option>
                  <option>Weekly</option>
                </select>
              </div>
            </div>
          </div>

          <button className="w-full inline-flex items-center justify-center gap-2 rounded-btn bg-primary py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-primary-dark">
            <FiSave /> Save All Changes
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardSettings;
