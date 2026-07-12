export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
 
export function formatPrice(price: number): string {
  return `${price.toLocaleString('ar-EG')} ج.م`;
}
 
export function formatDate(date: Date): string {
  return date.toLocaleDateString('ar-EG', {
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}
 