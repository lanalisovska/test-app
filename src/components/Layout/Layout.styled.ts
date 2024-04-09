import styled from 'styled-components';

interface Custom {
  pathname?: string;
}

export const LayoutWrapperLogic = styled.div<Custom>`
  width: 100%;
  height: 100%;
  background-color: red;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
  box-shadow: inset 0px -158px 98px 22px rgb(0, 0, 0);
`;

export const LayoutWrapper = styled.div`
  width: 1330px;
  margin: 0 auto;
  display: grid;
  align-items: start;
  flex-direction: column;
  justify-content: start;
  color: white;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  padding: 10px 0;
  width: 1500px;
`;
