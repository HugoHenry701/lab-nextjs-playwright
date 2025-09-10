import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Create the HTTP link
const httpLink = new HttpLink({
  // Use our local GraphQL server
  uri: '/api/graphql',
});

// Create the Apollo Client instance
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
