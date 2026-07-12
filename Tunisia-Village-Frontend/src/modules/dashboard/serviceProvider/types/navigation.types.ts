import React from 'react';

export type DashboardTab = 
  | 'dashboard' 
  | 'hotels' 
  | 'reservations' 
  | 'products' 
  | 'availability' 
  | 'performance' 
  | 'reviews' 
  | 'financials' 
  | 'profile';

export interface SidebarItem {
  id: string;
  label: string;
  path: string;
  component: React.ComponentType<any>;
}

export interface SidebarSection {
  id: string;
  title: string;
  items: SidebarItem[];
}

export interface NavItem {
  id: DashboardTab;
  label: string;
  path: string;
  sidebarSections?: SidebarSection[];
}
