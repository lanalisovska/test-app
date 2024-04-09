<<<<<<< Updated upstream
import React, { useState } from 'react';
import styles from '@/styles/page.module.css';
import { getPeopleList } from './api/getPeopleList';

const Home = ({ data }: any) => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [state, setState] = useState(data);
  return (
    <main className={styles.main}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'centee',
          overflowX: 'scroll',
          gap: '10px',
        }}
      >
        <div> Home</div>

        {state?.results?.map((person: any) => (
          <div
            style={{ width: '300px', height: '400px', border: '1px solid white', padding: '20px' }}
            key={person.id}
          >
            {person.name}
          </div>
        ))}
      </div>
    </main>
=======
import React, { useEffect, useState, useRef } from 'react';
import { getFilmsList, getPeopleList, getStarshipsList } from './api/apiRequests';
import { PersonsList, MainPageWrapper } from '@/styles/MainPage.styled';
import PersonItem from '@/components/PersonItem';
import 'reactflow/dist/style.css';
import { Person, type MainPageIterface } from '@/interfaces';

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
    <MainPageWrapper>
      <PersonsList ref={wrapperRef} onScroll={handleScroll}>
        {peopleList?.map((person: Person) => (
          <PersonItem key={person.id} person={person} films={films.results} starships={starships} />
        ))}
      </PersonsList>
    </MainPageWrapper>
>>>>>>> Stashed changes
  );
};

export async function getStaticProps() {
<<<<<<< Updated upstream
  const data = await getPeopleList();
  return {
    props: { data },
=======
  const people = await getPeopleList();
  const films = await getFilmsList();
  const starships = await getStarshipsList();
  return {
    props: { people, films, starships },
>>>>>>> Stashed changes
  };
}
export default Home;
