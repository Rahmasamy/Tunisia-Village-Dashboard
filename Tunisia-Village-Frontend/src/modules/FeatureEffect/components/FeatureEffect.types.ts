export interface TimelineItem {
  year: number;
  title: string;
  description: string;
  image: string;
  position: "above" | "below";
}

export interface TimelineNodeProps {
  item: TimelineItem;
  index: number;
  isActive: boolean;
  onClick: () => void;
}