import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/?';

export const fetchImage = async (query, page) => {
  const images = await axios({
    params: {
      q: query,
      page,
      key: '29876171-467d2b4c1ee85715865faf87a',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
    },
  });

  return images.data;
};
