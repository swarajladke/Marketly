import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiBox, FiUploadCloud, FiDollarSign, FiSettings, FiBell, FiMenu, FiX, FiSearch, FiTrendingUp, FiStar, FiMessageSquare, FiPercent, FiLogOut, FiHelpCircle } from 'react-icons/fi';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const menuSections = [
    {
      title: 'Main Menu',
      links: [
        { name: 'Overview', path: '/admin', icon: <FiHome /> },
        { name: 'Analytics', path: '/admin/analytics', icon: <FiTrendingUp /> },
        { name: 'Earnings', path: '/admin/earnings', icon: <FiDollarSign /> },
      ]
    },
    {
      title: 'Inventory',
      links: [
        { name: 'Manage Products', path: '/admin/products', icon: <FiBox /> },
        { name: 'Upload asset', path: '/admin/upload', icon: <FiUploadCloud /> },
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'Reviews', path: '/admin/reviews', icon: <FiStar />, badge: 4 },
        { name: 'Messages', path: '/admin/messages', icon: <FiMessageSquare />, badge: 2 },
        { name: 'Promotions', path: '/admin/promotions', icon: <FiPercent /> },
      ]
    },
    {
      title: 'System',
      links: [
        { name: 'Store Settings', path: '/admin/settings', icon: <FiSettings /> },
      ]
    }
  ];

  return (
    <div className="flex bg-surface min-h-screen font-body text-dark">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r border-border z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 border-b border-border flex items-center justify-between">
          <Link to="/" className="font-heading font-bold text-2xl text-primary">Marketly.</Link>
          <button className="lg:hidden text-muted hover:text-dark" onClick={() => setSidebarOpen(false)}>
            <FiX size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
          <nav className="flex flex-col gap-8">
            {menuSections.map((section) => (
              <div key={section.title}>
                <p className="text-[10px] font-bold text-muted/60 uppercase tracking-[0.2em] mb-4 px-4">{section.title}</p>
                <div className="flex flex-col gap-1.5">
                  {section.links.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.path}
                      className={`group flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                        location.pathname === link.path 
                          ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                          : 'text-muted hover:bg-primary/5 hover:text-primary'
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-xl ${location.pathname === link.path ? 'text-white' : 'text-muted group-hover:text-primary'}`}>
                          {link.icon}
                        </span>
                        <span className="text-sm">{link.name}</span>
                      </div>
                      {link.badge && (
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                          location.pathname === link.path ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                        }`}>
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Help Center Card */}
          <div className="mt-10 mb-6 px-2">
            <div className="bg-dark/5 rounded-2xl p-5 border border-dark/5 relative overflow-hidden group hover:border-primary/20 transition-colors">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mb-4">
                  <FiHelpCircle size={20} />
                </div>
                <h4 className="font-bold text-dark text-sm mb-1">Help Center</h4>
                <p className="text-xs text-muted leading-relaxed mb-4">Need help with your store settings? Our support is 24/7.</p>
                <button className="w-full py-2 bg-white text-dark text-xs font-bold rounded-lg border border-border hover:bg-dark hover:text-white hover:border-dark transition-all">
                  Get Support
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border bg-white mt-auto">
          <div className="flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-surface transition-colors cursor-pointer group">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-primary flex-shrink-0 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                M
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm text-dark truncate">Marketly Admin</p>
                <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Store Owner</p>
              </div>
            </div>
            <button className="p-2 text-muted hover:text-red-500 transition-colors" title="Logout">
              <FiLogOut size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="bg-white border-b border-border h-16 flex items-center justify-between px-4 sm:px-8 z-30 sticky top-0">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-dark p-1" onClick={() => setSidebarOpen(true)}>
              <FiMenu size={24} />
            </button>
            <div className="hidden sm:flex items-center bg-surface border border-border rounded-btn px-3 py-2 w-64 focus-within:border-primary transition-colors">
              <FiSearch className="text-muted mr-2" />
              <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none text-sm w-full" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-muted hover:text-dark transition-colors">
              <FiBell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <Link to="/" className="hidden sm:block text-sm font-medium text-primary hover:underline">Back to Marketplace</Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
