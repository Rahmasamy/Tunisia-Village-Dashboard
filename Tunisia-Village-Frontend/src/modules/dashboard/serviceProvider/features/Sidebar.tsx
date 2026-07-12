"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { navigationConfig } from '../config/navigation.config';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname() || '';

  // Determine active tab
  const getActiveTab = () => {
    if (pathname === '/dashboard' || pathname.startsWith('/dashboard/overview') || pathname.startsWith('/dashboard/activities')) {
      return navigationConfig.find(item => item.id === 'dashboard');
    }
    return navigationConfig.find(
      item => item.id !== 'dashboard' && pathname.startsWith(item.path)
    );
  };

  const activeTab = getActiveTab() || navigationConfig[0];
  const sections = activeTab.sidebarSections || [];

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-xs lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside 
        dir="rtl"
        className={`fixed inset-y-0 right-0 z-40 w-72 bg-white border-l border-gray-150 flex flex-col transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Sidebar Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 lg:hidden">
          <span className="font-extrabold text-gray-900">{activeTab.label}</span>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-gray-500 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Header (Title) */}
        <div className="hidden lg:block px-8 py-5 border-b border-gray-100">
          <div className="relative pb-2 inline-block">
            <h2 className="text-xl font-extrabold text-[#334bb1] tracking-wide">
              {activeTab.label}
            </h2>
            <div className="absolute bottom-0 right-0 left-0 h-[3px] bg-[#334bb1] rounded-full" />
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="space-y-2">
              {/* Section Header */}
              <span className="text-[15px] font-black text-gray-900 block pb-1 border-b border-gray-50">
                {section.title}
              </span>

              {/* Section Items */}
              <ul className="space-y-1 pr-2">
                {section.items.map((item) => {
                  const isActive = pathname === item.path || (item.path !== '/dashboard' && pathname.startsWith(item.path));
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.path}
                        onClick={onClose}
                        className={`block py-2 text-sm font-semibold transition-all duration-200 hover:pr-1 ${
                          isActive
                            ? 'text-orange-500 font-bold'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {sections.length === 0 && (
            <div className="text-center py-8 text-gray-400 text-sm">
              لا توجد أقسام فرعية
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
