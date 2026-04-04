import React from 'react';
import { FiUploadCloud, FiFile, FiImage } from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const DashboardUpload = () => {
  useDocumentTitle('Upload Asset');

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="font-heading font-bold text-2xl text-dark mb-1">Upload Asset</h1>
        <p className="text-muted">Add a new digital product to your store catalog.</p>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-card shadow-sm border border-border">
            <h2 className="font-bold text-dark text-lg mb-4">Product Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Product Name</label>
                <input type="text" className="w-full bg-surface border border-border rounded-btn px-4 py-3 text-dark focus:outline-none focus:border-primary" placeholder="e.g. Horizon Admin Dashboard" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Description</label>
                <textarea rows="4" className="w-full bg-surface border border-border rounded-btn px-4 py-3 text-dark focus:outline-none focus:border-primary resize-none" placeholder="Describe your product..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Category</label>
                  <select className="w-full bg-surface border border-border rounded-btn px-4 py-3 text-dark focus:outline-none focus:border-primary">
                    <option>Themes</option>
                    <option>Plugins</option>
                    <option>Templates</option>
                    <option>UI Kits</option>
                    <option>Fonts</option>
                    <option>Graphics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Price ($)</label>
                  <input type="number" className="w-full bg-surface border border-border rounded-btn px-4 py-3 text-dark focus:outline-none focus:border-primary" placeholder="29" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Tags</label>
                <input type="text" className="w-full bg-surface border border-border rounded-btn px-4 py-3 text-dark focus:outline-none focus:border-primary" placeholder="React, Dashboard, Tailwind (comma separated)" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-card shadow-sm border border-border">
            <h2 className="font-bold text-dark text-lg mb-4">Preview Images</h2>
            <div className="border-2 border-dashed border-border rounded-card p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <FiImage className="mx-auto text-muted mb-3" size={32} />
              <p className="text-dark font-medium">Drop preview images here</p>
              <p className="text-sm text-muted mt-1">PNG, JPG up to 10MB each</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-card shadow-sm border border-border">
            <h2 className="font-bold text-dark text-lg mb-4">Product File</h2>
            <div className="border-2 border-dashed border-border rounded-card p-10 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <FiUploadCloud className="mx-auto text-primary mb-3" size={40} />
              <p className="text-dark font-bold">Upload your asset file</p>
              <p className="text-sm text-muted mt-1">ZIP, RAR up to 500MB</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-card shadow-sm border border-border">
            <h2 className="font-bold text-dark text-lg mb-4">Licensing</h2>
            <div className="space-y-3">
              <label className="flex cursor-pointer items-start gap-3 rounded-btn border border-border p-4 hover:border-primary/30 transition-colors">
                <input type="radio" name="license" className="mt-1 accent-primary" defaultChecked />
                <div>
                  <p className="font-bold text-dark">Regular License</p>
                  <p className="text-sm text-muted">Single end product, non-paid users</p>
                </div>
              </label>
              <label className="flex cursor-pointer items-start gap-3 rounded-btn border border-border p-4 hover:border-primary/30 transition-colors">
                <input type="radio" name="license" className="mt-1 accent-primary" />
                <div>
                  <p className="font-bold text-dark">Extended License</p>
                  <p className="text-sm text-muted">Paid users, commercial distribution</p>
                </div>
              </label>
            </div>
          </div>

          <button className="w-full rounded-btn bg-primary py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-primary-dark">
            Publish Product
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardUpload;
