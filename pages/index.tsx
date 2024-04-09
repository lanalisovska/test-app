import React, { useEffect, useState, useRef } from 'react';
import { getFilmsList, getPeopleList, getStarshipsList } from './api/apiRequests';
import { PersonsList } from '../styles/MainPage.styled';
import PersonItem from '../components/PersonItem';
import 'reactflow/dist/style.css';
import { Person, type MainPageIterface } from '../interfaces';

const Home = ({ people, films, starships }: MainPageIterface) => {
  const [peopleList, setPeopleList] = useState(people?.results);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPeopleList(people?.results);
  }, [people]);

  const fetchNextPage = () => {
    setPeopleList((prevData: Person[]) => [...prevData, ...peopleList]);
  };

  const handleScroll = () => {
    const wrapper = wrapperRef.current;
    if (wrapper !== null && wrapper !== undefined) {
      const { scrollLeft, scrollWidth, clientWidth } = wrapper;
      if (scrollLeft === scrollWidth - clientWidth) {
        fetchNextPage();
      }
    }
  };
  return (
    <div>
      <PersonsList ref={wrapperRef} onScroll={handleScroll}>
        {peopleList?.map((person: Person) => (
          <PersonItem key={person.id} person={person} films={films.results} starships={starships} />
        ))}
      </PersonsList>
    </div>
  );
};

export async function getStaticProps() {
  const people = await getPeopleList();
  const films = await getFilmsList();
  const starships = await getStarshipsList();
  return {
    props: { people, films, starships },
  };
}
export default Home;
