import React from 'react';

export function InteractiveMap() {
  return (
    <div className="flex-1 h-full bg-[#E5E3DF] relative overflow-hidden lg:rounded-l-[32px] w-full min-h-[400px] lg:min-h-auto">
       {/* Use an interactive Google Maps iframe pointing to Fayoum as a beautiful placeholder */}
       <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428942.36873999996!2d30.347514194098485!3d29.3524810237754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1459a9e22dbcb9cb%3A0xe549bd1a665248cd!2sFaiyum%20Governorate!5e0!3m2!1sen!2seg!4v1711654321987!5m2!1sen!2seg"
         width="100%"
         height="100%"
         style={{ border: 0 }}
         allowFullScreen={false}
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"
         className="absolute inset-0 z-0 grayscale-[20%] sepia-[10%] hue-rotate-15"
       ></iframe>
       
       {/* Floating UI Elements mimicking the design */}
       <div className="absolute top-[20%] left-[20%] md:top-1/4 md:left-1/4 z-10 w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-white shadow-xl overflow-hidden bg-white hover:scale-110 transition duration-300 cursor-pointer group">
          <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=100&q=80" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" alt="Marker" />
       </div>
       
       <div className="absolute top-[35%] right-[25%] md:top-1/3 md:right-1/4 z-10 w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-full border-[3px] border-white shadow-xl overflow-hidden bg-white hover:scale-110 transition duration-300 cursor-pointer group">
          <img src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=100&q=80" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" alt="Marker" />
       </div>

       <div className="absolute bottom-[25%] left-[35%] md:bottom-1/3 md:left-1/3 z-10 w-14 h-14 md:w-16 md:h-16 rounded-full border-[3px] border-white shadow-xl overflow-hidden bg-white hover:scale-110 transition duration-300 cursor-pointer group">
          <img src="https://images.unsplash.com/photo-1618477461853-cf6ed80fbea5?w=100&q=80" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" alt="Marker" />
       </div>
    </div>
  );
}
