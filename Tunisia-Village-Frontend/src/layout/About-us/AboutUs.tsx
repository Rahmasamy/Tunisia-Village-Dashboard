import React from 'react'

import { AboutHero } from '../../modules/AboutUs/AboutHero';
import { AboutDetails } from '../../modules/AboutUs/AboutDetails';
import { CivilizationsFeature } from '../../modules/AboutUs/CivilizationsFeature';

export default function AboutUs() {
  return (
   
    <>
     <div className="flex flex-col w-full min-h-screen pt-8 pb-16 px-4 md:px-8 bg-gray-50/50">
      <div className="max-w-7xl w-full mx-auto space-y-16">
        <AboutHero />
        <AboutDetails />
        <CivilizationsFeature />
      </div>
    </div>
    <div className="flex flex-col w-full min-h-screen pt-8 pb-16 px-4 md:px-8 bg-gray-50/50">
      <div className="max-w-7xl w-full mx-auto space-y-16">
        <AboutHero />
        <AboutDetails />
        <CivilizationsFeature />
      </div>
    </div>
    </>
  )
}
