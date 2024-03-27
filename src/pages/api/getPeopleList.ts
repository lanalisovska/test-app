import fetcher from '@/pages/api/fetcher';
import { BASE_URL, PEOPLE } from '@/constants';

export const getPeopleList = async () => {
  try {
    const data = await fetcher(`${BASE_URL}/${PEOPLE}/`);
    return data;
  } catch (error) {
    return error;
  }
};
