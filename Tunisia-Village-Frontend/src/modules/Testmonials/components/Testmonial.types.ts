export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
}
 
export interface ReviewCardProps {
  review: Review;
  isCenter: boolean;
  onClick: () => void;
}
 
export interface StarRatingProps {
  rating: number;
  max?: number;
}