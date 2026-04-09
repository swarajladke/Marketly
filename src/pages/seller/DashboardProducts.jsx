import React from 'react';
import { FiEdit2, FiTrash2, FiEye } from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { products } from '../../data/mockData';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const DashboardProducts = () => {
  useDocumentTitle('Manage Products');

  return (
    <DashboardLayout>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="mb-1 font-heading text-3xl font-bold text-dark">Manage Products</h1>
          <p className="max-w-2xl text-muted">A simpler inventory table for pricing, sales, update dates, and quick actions.</p>
        </div>
        <button className="self-start rounded-2xl border border-white/8 bg-white/6 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">
          + Add Product
        </button>
      </div>

      <div className="dashboard-surface overflow-hidden rounded-[28px]">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-muted">Product</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-muted">Category</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-muted">Price</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-muted">Sales</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-muted">Rating</th>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-muted">Updated</th>
                <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-muted">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, 10).map((product) => (
                <tr key={product.id} className="border-b border-border transition-colors last:border-0 hover:bg-white/4">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={product.previewImage} alt={product.title} className="h-10 w-12 rounded-lg object-cover" />
                      <span className="max-w-[220px] truncate font-bold text-dark">{product.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted">
                    <span className="inline-flex rounded-full border border-white/8 bg-white/4 px-3 py-1 text-xs font-medium text-white/72">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-dark">${product.price}</td>
                  <td className="px-6 py-4 text-muted">{product.sales}</td>
                  <td className="px-6 py-4 text-muted">{product.rating}★</td>
                  <td className="px-6 py-4 text-muted">{new Date(product.lastUpdated).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="rounded-xl border border-white/8 bg-white/4 p-2 text-muted transition-colors hover:bg-white/8 hover:text-white" title="View">
                        <FiEye size={16} />
                      </button>
                      <button className="rounded-xl border border-white/8 bg-white/4 p-2 text-muted transition-colors hover:bg-white/8 hover:text-white" title="Edit">
                        <FiEdit2 size={16} />
                      </button>
                      <button className="rounded-xl border border-white/8 bg-white/4 p-2 text-muted transition-colors hover:bg-white/8 hover:text-red-400" title="Delete">
                        <FiTrash2 size={16} />
                      </button>
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
