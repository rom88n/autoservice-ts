import { ApolloClient, WatchQueryOptions, QueryOptions, MutationOptions } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
// import { NextPageContext } from 'next';

export interface DefaultOptions {
  watchQuery?: Partial<WatchQueryOptions>;
  query?: Partial<QueryOptions>;
  mutate?: Partial<MutationOptions>;
}

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

// const request = (operation: any): void => {
//   const token = localStorage.getItem('token')
//   operation.setContext({
//     headers: {
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   })
// }

export default new ApolloClient({
  ssrMode: !process.browser,
  link: new HttpLink({
    uri: `http://${process.env.API_URL}/api`,
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    fetch
  }),
  cache: new InMemoryCache(),
  defaultOptions
})
