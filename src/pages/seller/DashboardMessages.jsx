import React from 'react';
import { FiSend, FiPaperclip } from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const conversations = [
  { id: 1, name: 'Sarah M.', preview: 'Hey, is the admin kit compatible with Next.js 14?', time: '2m ago', unread: true },
  { id: 2, name: 'James K.', preview: 'Thanks for the quick update! Works perfectly now.', time: '1h ago', unread: true },
  { id: 3, name: 'Priya R.', preview: 'Can I get the Figma source files separately?', time: '3h ago', unread: false },
  { id: 4, name: 'Alex T.', preview: 'Great product, left a 5-star review.', time: '1d ago', unread: false },
  { id: 5, name: 'Chen W.', preview: 'Looking for a bulk license for our team...', time: '2d ago', unread: false },
];

const DashboardMessages = () => {
  useDocumentTitle('Messages');

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="font-heading font-bold text-2xl text-dark mb-1">Messages</h1>
        <p className="text-muted">Customer conversations and support inquiries.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 h-[600px]">
        {/* Conversation List */}
        <div className="bg-white rounded-card shadow-sm border border-border overflow-hidden flex flex-col">
          <div className="p-4 border-b border-border">
            <input type="text" className="w-full bg-surface border border-border rounded-btn px-4 py-2 text-sm text-dark focus:outline-none focus:border-primary" placeholder="Search messages..." />
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-border">
            {conversations.map((conv) => (
              <button key={conv.id} className={`w-full text-left p-4 hover:bg-surface/70 transition-colors ${conv.id === 1 ? 'bg-primary/5 border-l-2 border-primary' : ''}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-dark text-sm">{conv.name}</span>
                  <span className="text-xs text-muted">{conv.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-muted truncate flex-1">{conv.preview}</p>
                  {conv.unread && <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Message View */}
        <div className="bg-white rounded-card shadow-sm border border-border overflow-hidden flex flex-col">
          <div className="p-4 border-b border-border flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white font-bold">S</div>
            <div>
              <p className="font-bold text-dark text-sm">Sarah M.</p>
              <p className="text-xs text-muted">Online now</p>
            </div>
          </div>
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            <div className="flex justify-start">
              <div className="max-w-xs bg-surface rounded-2xl rounded-bl-md px-4 py-3 text-sm text-dark">
                Hey, is the admin kit compatible with Next.js 14?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-xs bg-primary text-white rounded-2xl rounded-br-md px-4 py-3 text-sm">
                Hi Sarah! Yes, it's fully compatible with Next.js 14 and React 18. Do you need setup guidance?
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-border flex items-center gap-3">
            <button className="p-2 text-muted hover:text-primary transition-colors"><FiPaperclip size={20} /></button>
            <input type="text" className="flex-1 bg-surface border border-border rounded-btn px-4 py-2 text-sm text-dark focus:outline-none focus:border-primary" placeholder="Type a message..." />
            <button className="p-2 bg-primary text-white rounded-btn hover:bg-primary-dark transition-colors"><FiSend size={18} /></button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardMessages;
