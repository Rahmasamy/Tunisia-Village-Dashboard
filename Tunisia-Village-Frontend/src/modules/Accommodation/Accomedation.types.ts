export type AccommodationType = 'hotel' | 'villa' | 'guesthouse' | 'eco-farm' | 'residential' | 'all';
 
export interface Accommodation {
  id: string;
  title: string;
  type: AccommodationType;
  location: string;
  rating: number;
  pricePerNight: number;
  originalPrice?: number;
  discountPercent?: number;
  isAvailable: boolean;
  isSpecialOffer?: boolean;
  image: string;
  description: string;
  amenities: string[];
  rooms: number;
  bathrooms: number;
}
 export interface SearchFilters {
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  accommodationType?: string;
}