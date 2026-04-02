import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiBox, FiUploadCloud, FiDollarSign, FiSettings, FiBell, FiMenu, FiX, FiSearch } from 'react-icons/fi';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Overview', path: '/dashboard', icon: <FiHome /> },
    { name: 'My Products', path: '/dashboard/products', icon: <FiBox /> },
    { name: 'Upload Product', path: '/dashboard/upload', icon: <FiUploadCloud /> },
    { name: 'Earnings', path: '/dashboard/earnings', icon: <FiDollarSign /> },
    { name: 'Settings', path: '/dashboard/settings', icon: <FiSettings /> },
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
        
        <div className="p-6">
          <p className="text-xs font-bold text-muted uppercase tracking-wider mb-4">Menu</p>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-btn font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'bg-primary-light text-primary font-bold' 
                    : 'text-muted hover:bg-surface hover:text-dark'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="text-lg">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-border">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/150?img=11" alt="avatar" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-bold text-sm">Alex Morgan</p>
              <p className="text-xs text-muted">Pro Seller</p>
            </div>
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
