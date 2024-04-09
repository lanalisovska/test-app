import React, { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import ReactFlow, { Background, Controls, type Edge, type Node } from 'reactflow';
import { CustomBox, PersonItemStyle, InfoPerson } from '@/styles/MainPage.styled';
import { filterUniqueEdges, filterUniqueNodes, getNodePosition } from '@/helpers';
import { type Film, type PersonItemIterface } from '@/interfaces';
import { SHIP } from '@/constants';

const PersonItem = ({ person, films, starships }: PersonItemIterface) => {
  const [initialNodes, setInitialNodes] = useState<Node[]>([]);
  const [initialEdges, setInitialEdges] = useState<Edge[]>([]);
  const [personFilms, setPersonFilms] = useState<Film[]>([]);
  const [showFlow, setShowFlow] = useState<boolean>(false);

  useEffect(() => {
    const valuesMatch: Film[] = [];
    if (person.films.length > 0 && films.length > 0) {
      person.films.forEach((filmPerson) => {
        const matchedFilm = films.find((film) => film.id === filmPerson);
        if (matchedFilm !== undefined) {
          valuesMatch.push(matchedFilm);
        }
      });
    }
    setPersonFilms(valuesMatch);
  }, [person.films, films]);

  const starShips = personFilms.reduce((acc: Array<{ filmId: number; shipId: string }>, film) => {
    const personShipsInFilm = person?.starships?.filter((shipId: number) =>
      film?.starships?.includes(shipId),
    );
    if (personShipsInFilm.length > 0) {
      personShipsInFilm.forEach((shipId: number) => {
        acc.push({
          filmId: film.id,
          shipId: `ship${shipId}`,
        });
      });
    }
    return acc;
  }, []);

  useEffect(() => {
    const newEdges = initialNodes.flatMap((node: Node) => {
      if (node.id.includes(SHIP)) {
        return starShips.map((ship) => ({
          id: `${SHIP}-${node.id}-${ship.filmId}-${ship.shipId}`,
          source: ship.filmId.toString(),
          target: ship.shipId,
        }));
      } else {
        return {
          id: `${node?.id}`,
          source: 'uni1-id',
          target: node.id.toString(),
        };
      }
    });
    const filteredEdges = filterUniqueEdges(newEdges);
    setInitialEdges(filteredEdges);
  }, [initialNodes]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    setInitialNodes((prevNodes) => {
      const updatedNodes: Node[] = [];

      personFilms.forEach((film: Film) => {
        const personShipsInFilm = person?.starships?.filter((shipId: number) =>
          film?.starships?.includes(shipId),
        );
        personShipsInFilm.forEach((shipId) => {
          const fullShipInfo = starships.find((el) => el.id === shipId);
          updatedNodes.push({
            id: `ship${shipId}`,
            position: { x: 0, y: 0 },
            data: {
              label: fullShipInfo?.name ?? `${SHIP}`,
            },
          });
        });

        const filmTitle = film.title ?? 'film-default';
        updatedNodes.push({
          id: `${film.id}`,
          position: { x: 0, y: 0 },
          data: {
            label: filmTitle,
          },
        });
      });
      return [
        { id: 'uni1-id', position: { x: 0, y: 0 }, data: { label: person.name } },
        ...filterUniqueNodes(updatedNodes),
      ];
    });
  }, [person, personFilms]);

  const handleClick = () => {
    setShowFlow(!showFlow);
  };
  return (
    <PersonItemStyle showflow={showFlow ? 'show' : ''}>
      <span>Click the button to see more info</span>
      <InfoPerson>
        <Button onClick={handleClick}>{person.name}</Button>
        <CustomBox>
          <div>
            <span>Gender: {person?.gender}</span>
            <span>Height: {person?.height}</span>
            <span>Mass: {person?.mass}</span>
          </div>
        </CustomBox>
      </InfoPerson>
      {showFlow && (
        <ReactFlow
          fitView={true}
          defaultViewport={{ x: 0, y: -100, zoom: 0 }}
          nodes={initialNodes.map((node) => ({
            ...node,
            position: getNodePosition(node.id, initialNodes, SHIP),
          }))}
          edges={initialEdges}
        >
          <Controls />
          <Background gap={40} />
        </ReactFlow>
      )}
    </PersonItemStyle>
  );
};

export default PersonItem;
