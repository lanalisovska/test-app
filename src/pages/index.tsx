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
  );
};

export async function getStaticProps() {
  const data = await getPeopleList();
  return {
    props: { data },
  };
}
export default Home;
