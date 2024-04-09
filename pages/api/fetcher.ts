import { HttpStatus } from '../../interfaces/http-status.enum';

const fetcher = async (url: string, method = 'GET', data = {}) => {
  let res;

  try {
    if (method === 'GET') {
      res = await fetch(url);
    } else {
      res = await fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    if (res.status >= HttpStatus.INTERNAL_SERVER_ERROR) {
      const error = new Error('An error occurred while fetching the data.');
      // @ts-expect-error
      error.status = res.status;
      throw error;
    }
    const text = await res?.text();
    if (!text) {
      return { statusCode: res.status };
    }
    return JSON.parse(text);
  } catch (error) {
    console.error('Error in fetcher:', error);
    throw error;
  }
};

export default fetcher;
