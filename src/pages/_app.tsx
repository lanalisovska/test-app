import React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import '@/styles/globals.css';
import Layout from '../components/Layout';

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <ChakraProvider theme={theme}>
      <Box
        bgImage="url(/wallpaper.jpg)"
        height={'100vh'}
        alignContent={'start'}
        justifyContent={'start'}
      >
        <Layout pathname={pathname}>
          <Component {...pageProps} />
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default App;
