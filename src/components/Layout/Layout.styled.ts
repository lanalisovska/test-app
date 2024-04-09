import styled from 'styled-components';

interface Custom {
  pathname?: string;
}

export const LayoutWrapperLogic = styled.div<Custom>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
`;

export const LayoutWrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: start;
  flex-direction: column;
  justify-content: start;
  color: white;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  width: auto;
  overflow-x: scroll;
  padding: 0 80px;
  > div {
    height: 100%;
  }
`;
