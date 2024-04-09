<<<<<<< Updated upstream
import { COLOR_BLACK_MAIN, LAPTOP_L, LAPTOP_LX, LAPTOP_M, TABLET_L } from './../../constants';
=======
>>>>>>> Stashed changes
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
  @media screen and (max-width: ${TABLET_L}) {
    background-image: none;
    background-color: ${COLOR_BLACK_MAIN};
  }
`;

export const LayoutWrapper = styled.div`
  width: 1330px;
  margin: 0 auto;
  display: grid;
  align-items: center;
<<<<<<< Updated upstream
  gap: 0;
  grid-template-columns: 1330px;
  grid-template-rows: 190px 1fr 120px;
  height: 100vh;
  @media screen and (max-width: ${LAPTOP_LX}) {
    width: 1100px;
    grid-template-columns: 1100px;
    grid-template-rows: 150px 1fr 100px;
  }
  @media screen and (max-width: ${LAPTOP_L}) {
    grid-template-columns: 900px;
    width: 900px;
  }
  @media screen and (max-width: ${TABLET_L}) {
    grid-template-columns: 100%;
    width: 100%;
    grid-template-rows: 90px 1fr 80px;
  }
  .login {
    z-index: 999;
    position: absolute;
    margin: 0 auto;
    width: inherit;
    height: 100vh;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
    justify-content: center;
=======
  flex-direction: column;
  justify-content: start;
  color: white;
  height: 100%;
  > div {
    width: 100%;
>>>>>>> Stashed changes
  }
`;

export const ContentWrapper = styled.div`
<<<<<<< Updated upstream
  background-color: ${COLOR_BLACK_MAIN};
  padding: 80px 0;
  height: 100%;
  @media screen and (max-width: ${LAPTOP_LX}) {
    padding: 50px 0;
  }
  @media screen and (max-width: ${LAPTOP_M}) {
    padding: 30px 0;
  }
  @media screen and (max-width: ${TABLET_L}) {
    padding: 0;
  }
=======
  padding: 10px 0;
  width: 1500px;
>>>>>>> Stashed changes
`;
