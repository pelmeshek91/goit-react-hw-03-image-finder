import axios from 'axios';

export const axiosPicture = async (query, page = 1) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '29876171-467d2b4c1ee85715865faf87a';

  const filtersImages =
    '&per_page=12&image_type=photo&orientation=horizontal&safesearch=true';

  const response = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${query}&page=${page}${filtersImages}`
  );

  return response.data.hits;
};
