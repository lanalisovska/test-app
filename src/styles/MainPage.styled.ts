import { Box } from '@chakra-ui/react';
import styled from 'styled-components';

interface PersonItemStyleProps {
  showflow: string;
}
export const MainPageWrapper = styled.div``;

export const PersonsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex: 1;
  min-height: min-content;
  width: auto;
  gap: 10px;
  overflow-x: auto;
`;

export const PersonItemStyle = styled.div<PersonItemStyleProps>`
  align-self: start;
  justify-self: start;
  border: 1px solid white;
  height: ${(props) => (props.showflow ? 'auto' : '300px')};
  display: grid;
  padding: 10px;
  grid-template-rows: 50px 250px 400px;
  grid-template-columns: 900px;
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
  grid-template-rows: 70px 20px 200px;
  grid-template-columns: 1fr;
  > span {
    font-size: 10px;
  }
`;
