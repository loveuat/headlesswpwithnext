import { ApolloClient, InMemoryCache } from "@apollo/client";
const API_URL = process.env.NEXT_PUBLIC_WP_API_URL;
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default client;