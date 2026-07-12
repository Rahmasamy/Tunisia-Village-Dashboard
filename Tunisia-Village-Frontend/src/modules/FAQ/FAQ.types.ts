import { faqs } from "@/src/shared/lib/consts/data";

export interface FAQItemProps {
  faq: typeof faqs[0];
  isOpen: boolean;
  onToggle: () => void;
}