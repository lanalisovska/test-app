import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {
  ContentWrapper,
  LayoutWrapper,
  LayoutWrapperLogic,
} from '@/components/Layout/Layout.styled';

interface LayoutProps {
  children: ReactNode;
  pathname: string;
}
const Layout = ({ children, pathname }: LayoutProps) => {
  return (
      <LayoutWrapperLogic>
        <LayoutWrapper>
          <Header />
          <ContentWrapper>{children}</ContentWrapper>
          <Footer />
        </LayoutWrapper>
      </LayoutWrapperLogic>
  );
};
export default Layout;
