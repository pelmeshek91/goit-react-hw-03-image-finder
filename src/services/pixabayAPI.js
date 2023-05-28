import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/?';

export const fetchImage = async (query, page = 1) => {
  const params = new URLSearchParams({
    q: query,
    page,
    key: '29876171-467d2b4c1ee85715865faf87a',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });

  const images = await axios.get(params);

  return images.data.hits;
};
