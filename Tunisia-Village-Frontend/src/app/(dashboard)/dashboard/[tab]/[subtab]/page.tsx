"use client";

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { validateAndGetRoute } from '@/src/modules/dashboard/serviceProvider/utils/navigation.utils';

export default function SubtabPage() {
  const params = useParams();
  const tab = params?.tab as string;
  const subtab = params?.subtab as string;

  if (!tab || !subtab) {
    notFound();
  }

  // Retrieve route component using validation helper
  const routeData = validateAndGetRoute(tab, subtab);

  if (!routeData) {
    notFound();
  }

  const { component: Component } = routeData;

  return <Component />;
}
