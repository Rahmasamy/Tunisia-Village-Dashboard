import { NavItem } from "@/src/modules/Navbar/NavItem";
import SelectIcon from "../../components/icons/SelectIcon/SelectIcon";


export const navItems: NavItem[] = [
  { label: " الصفحة الرئيسية ", href: "/" },
  { label: "الخدمات ", href: "/services" ,
    selectIcon : 
    
    <SelectIcon />
   
  },
{ label: "سياسة الأثر ", href: "/impact-info" },
  { label: "حجوزاتي", href: "/appointements" },
  { label: " عن الفيوم", href: "/about" },
  { label: "اتصل بنا ", href: "/contact-us" },
];





