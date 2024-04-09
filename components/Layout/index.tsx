import React, { type ReactNode } from 'react';
import Header from '../Header';
import { ContentWrapper, LayoutWrapper } from './Layout.styled';

interface LayoutProps {
  children: ReactNode;
  pathname: string;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  );
};
export default Layout;
