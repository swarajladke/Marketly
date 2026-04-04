import React from 'react';
import { FiEdit2, FiTrash2, FiEye, FiMoreVertical } from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { products } from '../../data/mockData';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const DashboardProducts = () => {
  useDocumentTitle('Manage Products');

  return (
    <DashboardLayout>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl text-dark mb-1">Manage Products</h1>
          <p className="text-muted">View and manage all your listed digital products.</p>
        </div>
        <button className="self-start rounded-btn bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark">
          + Add Product
        </button>
      </div>

      <div className="bg-white rounded-card shadow-sm border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-muted text-xs">Product</th>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-muted text-xs">Category</th>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-muted text-xs">Price</th>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-muted text-xs">Sales</th>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-muted text-xs">Rating</th>
                <th className="px-6 py-4 text-right font-bold uppercase tracking-wider text-muted text-xs">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, 10).map((product) => (
                <tr key={product.id} className="border-b border-border last:border-0 hover:bg-surface/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={product.previewImage} alt={product.title} className="w-12 h-10 rounded-lg object-cover" />
                      <span className="font-bold text-dark truncate max-w-[200px]">{product.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted">{product.category}</td>
                  <td className="px-6 py-4 font-bold text-dark">${product.price}</td>
                  <td className="px-6 py-4 text-muted">{product.sales}</td>
                  <td className="px-6 py-4 text-muted">{product.rating}★</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-muted hover:text-primary transition-colors" title="View"><FiEye size={16} /></button>
                      <button className="p-2 text-muted hover:text-primary transition-colors" title="Edit"><FiEdit2 size={16} /></button>
                      <button className="p-2 text-muted hover:text-red-500 transition-colors" title="Delete"><FiTrash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardProducts;
