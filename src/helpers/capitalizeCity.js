export const capitalizeCity = (city) => {
  if (!city) return "";

  return city
    .toLowerCase()
    .split(/[\s-]/) // разделяем по пробелу или дефису
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-"); // соединяем обратно пробелами
};