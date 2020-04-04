import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

const SERVER_URI = 'https://thfzdb5ajf.execute-api.us-east-1.amazonaws.com/dev/graphql';

// eslint-disable-next-line import/prefer-default-export
export const client = new ApolloClient({
  uri: SERVER_URI,
  fetch,
});
