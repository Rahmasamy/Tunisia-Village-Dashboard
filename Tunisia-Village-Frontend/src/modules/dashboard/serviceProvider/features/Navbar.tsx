"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Search, LogOut, Menu, User } from 'lucide-react';
import { navigationConfig } from '../config/navigation.config';

interface NavbarProps {
  onMenuToggle?: () => void;
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
  const pathname = usePathname() || '';
  const router = useRouter();

  // Determine active tab
  const getActiveTabId = () => {
    // If pathname matches exactly /dashboard or is one of the dashboard sub-paths
    if (pathname === '/dashboard' || pathname.startsWith('/dashboard/overview') || pathname.startsWith('/dashboard/activities')) {
      return 'dashboard';
    }
    const activeItem = navigationConfig.find(
      item => item.id !== 'dashboard' && pathname.startsWith(item.path)
    );
    return activeItem ? activeItem.id : 'dashboard';
  };

  const activeTabId = getActiveTabId();

  const handleLogout = () => {
    // Here we can trigger the logout mutation, for now let's just clear cookies or redirect
    router.push('/login');
  };

  return (
    <header className="w-full bg-white border-b border-gray-150 sticky top-0 z-50 shadow-sm" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Right Section: Logo & Brand */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button 
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-150 transition-colors"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-3 active:scale-95 transition-transform">
              <div className="w-12 h-12 relative flex items-center justify-center bg-[#eefaf6] rounded-2xl overflow-hidden border border-[#008767]/10">
                <Image 
                  src="/imgs/logo.png" 
                  alt="Anas Logo" 
                  width={38} 
                  height={38} 
                  className="object-contain" 
                />
              </div>
              <span className="text-xl font-black text-gray-900 tracking-wide">أنس</span>
            </Link>
          </div>

          {/* Middle Section: Dynamic Tabs */}
          <nav className="hidden lg:flex items-center gap-1.5 overflow-x-auto py-2 px-1">
            {navigationConfig.map((item) => {
              const isActive = activeTabId === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.sidebarSections && item.sidebarSections.length > 0 ? item.sidebarSections[0].items[0].path : item.path}
                  className={`px-4 py-2.5 rounded-2xl text-[15px] font-extrabold transition-all duration-250 whitespace-nowrap active:scale-[0.98] ${
                    isActive
                      ? 'bg-[#dbe4ff] text-[#334bb1] shadow-sm shadow-[#334bb1]/5'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            
            {/* Logout Tab */}
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-2xl text-[15px] font-extrabold text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-250 whitespace-nowrap active:scale-[0.98] cursor-pointer flex items-center gap-2"
            >
              <LogOut size={16} />
              <span>تسجيل الخروج</span>
            </button>
          </nav>

          {/* Left Section: Search and Utilities */}
          <div className="flex items-center gap-3">
            {/* Search Input Box */}
            <div className="relative hidden md:flex items-center">
              <input
                type="text"
                placeholder="بحث..."
                className="w-56 py-2.5 pr-10 pl-4 bg-gray-150/75 border border-transparent rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#008767] focus:bg-white focus:border-transparent transition-all placeholder-gray-400"
              />
              <div className="absolute right-3.5 text-gray-400">
                <Search size={18} />
              </div>
            </div>

            {/* Mobile Search Button */}
            <button className="md:hidden p-2.5 rounded-xl bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors">
              <Search size={20} />
            </button>

            {/* User Profile / Notification Placeholder */}
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-150 transition-colors cursor-pointer">
              <User size={20} />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
