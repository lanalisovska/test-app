import fetcher from './fetcher';
import { BASE_URL, PEOPLE, FILMS, STARSHIPS } from '../../constants';
import { type Starship } from '../../interfaces';

export const getPeopleList = async () => {
  try {
    const data = await fetcher(`${BASE_URL}/${PEOPLE}/`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getFilmsList = async () => {
  try {
    const films = await fetcher(`${BASE_URL}/${FILMS}`);
    return films;
  } catch (error) {
    return error;
  }
};
export const getStarshipsList = async () => {
  try {
    const starships = [];
    let nextPage = `${BASE_URL}/${STARSHIPS}/?page=1`;

    while (nextPage !== '') {
      const response = await fetcher(nextPage);
      const { results, next } = response;

      starships.push(...(results as Starship[]));
      nextPage = next || '';
    }
    return starships;
  } catch (error) {
    return error;
  }
};
