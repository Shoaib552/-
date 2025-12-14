// Helper functions used in WeatherContext
export const addToHistoryHelper = (prev, city) => {
  const filtered = prev.filter(c => c.toLowerCase() !== city.toLowerCase());
  return [city, ...filtered].slice(0, 5);
};
