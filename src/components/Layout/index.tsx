import React, { type ReactNode } from 'react';
import Header from '../Header';
<<<<<<< Updated upstream
import Footer from '../Footer';
import { ContentWrapper, LayoutWrapper, LayoutWrapperLogic } from './Layout.styled';
=======
import { ContentWrapper, LayoutWrapper } from './Layout.styled';
>>>>>>> Stashed changes

interface LayoutProps {
  children: ReactNode;
  pathname: string;
}
const Layout = ({ children }: LayoutProps) => {
  return (
<<<<<<< Updated upstream
    <LayoutWrapperLogic>
      <LayoutWrapper>
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </LayoutWrapper>
    </LayoutWrapperLogic>
=======
    <LayoutWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
>>>>>>> Stashed changes
  );
};
export default Layout;
