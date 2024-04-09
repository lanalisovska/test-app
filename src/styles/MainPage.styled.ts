import { Box } from '@chakra-ui/react';
import styled from 'styled-components';

interface PersonItemStyleProps {
  showflow: string;
}

export const PersonsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  justify-self: start;
  flex: 1;
  width: auto;
  height: 100%;
  gap: 10px;
  overflow-x: auto;
`;

export const PersonItemStyle = styled.div<PersonItemStyleProps>`
  align-self: start;
  color: white;
  justify-self: start;
  border: 1px solid white;
  height: ${(props) => (props.showflow ? 'auto' : '300px')};
  display: grid;
  padding: 10px;
  grid-template-rows: 50px 170px 500px;
  grid-template-columns: 800px;
  border-radius: 5px;
`;
export const CustomBox = styled(Box)({
  span: {
    display: 'block',
    marginBottom: '5px',
  },
});

export const InfoPerson = styled.div`
  display: grid;
  grid-template-rows: 70px 100px;
  > span {
    font-size: 10px;
  }
`;
