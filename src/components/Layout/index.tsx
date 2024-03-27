import { type ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ContentWrapper, LayoutWrapper, LayoutWrapperLogic } from './Layout.styled';

interface LayoutProps {
  children: ReactNode;
  pathname: string;
}
const Layout = ({ children, pathname }: LayoutProps) => {
  const a = '';
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
