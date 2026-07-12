import { redirect, notFound } from 'next/navigation';
import { navigationConfig } from '@/src/modules/dashboard/serviceProvider/config/navigation.config';

interface Props {
  params: Promise<{ tab: string }> | { tab: string };
}

export default async function TabPage({ params }: Props) {
  // Support both Next.js 14 sync and Next.js 15 async params structures
  const resolvedParams = await params;
  const tab = resolvedParams?.tab;

  if (!tab) {
    notFound();
  }

  const navItem = navigationConfig.find(item => item.id === tab);

  if (!navItem) {
    notFound();
  }

  // Redirect on server side directly to the first sidebar item
  if (navItem.sidebarSections && navItem.sidebarSections.length > 0) {
    const firstSubtab = navItem.sidebarSections[0].items[0];
    redirect(firstSubtab.path);
  }

  notFound();
}
