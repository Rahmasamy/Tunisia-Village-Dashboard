export interface CommunityPost {
  id: string;
  author: string;
  avatar: string;
  timestamp: string;
  content: string;
  images?: string[];
  likes: number;
  comments: number;
}
 
export interface ImpactStat {
  id: string;
  value: string;
  label: string;
}