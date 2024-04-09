import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonItem from '..';

describe('PersonItem Component tests', () => {
  const mockPerson = {
    id: 1,
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 1,
    films: [1, 2],
    species: [],
    vehicles: [],
    starships: [1, 2],
    created: '2022-04-08T12:00:00Z',
    edited: '2022-04-08T12:00:00Z',
    url: 'https://example.com/luke-skywalker',
  };
  const mockFilms = [
    {
      id: 1,
      title: 'Film 1',
      episode_id: 1,
      opening_crawl: 'Opening crawl for Film 1',
      director: 'Director 1',
      producer: 'Producer 1',
      release_date: '2022-01-01',
      characters: [],
      planets: [],
      starships: [1, 2],
      vehicles: [],
      species: [],
      created: '2022-01-01T00:00:00Z',
      edited: '2022-01-01T00:00:00Z',
      url: 'https://example.com/film1',
    },
    {
      id: 2,
      title: 'Film 2',
      episode_id: 2,
      opening_crawl: 'Opening crawl for Film 2',
      director: 'Director 2',
      producer: 'Producer 2',
      release_date: '2022-02-02',
      characters: [],
      planets: [],
      starships: [3, 4],
      vehicles: [],
      species: [],
      created: '2022-02-02T00:00:00Z',
      edited: '2022-02-02T00:00:00Z',
      url: 'https://example.com/film2',
    },
  ];

  const mockStarships = [
    {
      id: 1,
      name: 'Starship 1',
      model: 'Model 1',
      manufacturer: 'Manufacturer 1',
      cost_in_credits: '10000',
      length: '20',
      max_atmosphering_speed: '1000',
      crew: '10',
      passengers: '20',
      cargo_capacity: '100',
      consumables: '1 month',
      hyperdrive_rating: '1.0',
      MGLT: '100',
      starship_class: 'Class 1',
      pilots: [],
      films: [],
      created: '2022-01-01T00:00:00Z',
      edited: '2022-01-01T00:00:00Z',
      url: 'https://example.com/starship1',
    },
    {
      id: 2,
      name: 'Starship 2',
      model: 'Model 2',
      manufacturer: 'Manufacturer 2',
      cost_in_credits: '20000',
      length: '30',
      max_atmosphering_speed: '2000',
      crew: '20',
      passengers: '30',
      cargo_capacity: '200',
      consumables: '2 months',
      hyperdrive_rating: '2.0',
      MGLT: '200',
      starship_class: 'Class 2',
      pilots: [],
      films: [],
      created: '2022-02-02T00:00:00Z',
      edited: '2022-02-02T00:00:00Z',
      url: 'https://example.com/starship2',
    },
  ];

  it('renders without crashing', () => {
    const { container } = render(
      <PersonItem person={mockPerson} films={mockFilms} starships={mockStarships} />,
    );
    expect(container).toBeInTheDocument();
  });

  it('displays person information', () => {
    const { container, queryAllByText } = render(
      <PersonItem person={mockPerson} films={mockFilms} starships={mockStarships} />,
    );
    expect(container).toBeInTheDocument();

    const genderElement = queryAllByText('Gender: male', { selector: 'span' });
    const heightElement = queryAllByText('Height: 172', { selector: 'span' });
    const massElement = queryAllByText('Mass: 77', { selector: 'span' });
    expect(genderElement).toHaveLength(1);
    expect(heightElement).toHaveLength(1);
    expect(massElement).toHaveLength(1);
  });
  it('initially does not render ReactFlow', () => {
    const { queryByText } = render(
      <PersonItem person={mockPerson} films={mockFilms} starships={mockStarships} />,
    );
    expect(queryByText('Click the button to see more info')).toBeInTheDocument();
    expect(queryByText('Controls')).not.toBeInTheDocument();
  });
});
