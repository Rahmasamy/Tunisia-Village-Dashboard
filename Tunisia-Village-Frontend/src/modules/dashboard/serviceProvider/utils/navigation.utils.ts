import { navigationConfig } from '../config/navigation.config';
import { NavItem, SidebarItem, DashboardTab } from '../types/navigation.types';

/**
 * Validates a tab ID and checks if it matches a DashboardTab.
 */
export function isValidTab(tab: string): tab is DashboardTab {
  return navigationConfig.some(item => item.id === tab);
}

/**
 * Validates and retrieves the navigation structure for a given tab and subtab.
 */
export function validateAndGetRoute(tab: string, subtab: string): {
  navItem: NavItem;
  sidebarItem: SidebarItem;
  component: React.ComponentType<any>;
} | null {
  if (!isValidTab(tab)) return null;

  const navItem = navigationConfig.find(item => item.id === tab);
  if (!navItem || !navItem.sidebarSections) return null;

  for (const section of navItem.sidebarSections) {
    const sidebarItem = section.items.find(item => {
      // Matches path patterns ending with /subtab (e.g. /dashboard/products/language-title matches language-title)
      return item.path.endsWith(`/${subtab}`) || item.id === subtab;
    });

    if (sidebarItem && sidebarItem.component) {
      return {
        navItem,
        sidebarItem,
        component: sidebarItem.component
      };
    }
  }

  return null;
}
