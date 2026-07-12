"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function DashboardLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans" dir="rtl">
      {/* Dynamic Navbar */}
      <Navbar onMenuToggle={() => setIsSidebarOpen(true)} />

      {/* Main Workspace: Sidebar + Content */}
      <div className="flex flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 gap-6 items-start">
        
        {/* Dynamic Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Content Area */}
        <main className="flex-1 bg-white border border-gray-150 rounded-3xl shadow-xs p-6 sm:p-8 min-h-[70vh] overflow-x-hidden">
          {children}
        </main>
        
      </div>
    </div>
  );
}
