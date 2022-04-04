export function insertCommaPrice<T>(price: T): string {
  const result = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return result;
}
