import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        minHeight: '100%',
      },
      body: {
        fontFamily: 'Roboto, sans-serif',
        color: '#FFFFFF',
        minHeight: '100%',
      },
    },
  },
});

export default theme;
