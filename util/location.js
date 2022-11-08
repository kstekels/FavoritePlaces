import { API_KEY } from '@env';

export const getMapPreview = (lat, lon) => {
  const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=14&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${lon}&key=${API_KEY}`;
  return imagePreviewURL;
};

export const getAddress = async (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch address');
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
};
