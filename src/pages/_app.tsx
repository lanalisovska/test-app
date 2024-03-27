import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
