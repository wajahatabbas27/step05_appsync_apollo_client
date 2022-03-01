import fetch from "cross-fetch"
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://53rgxbeodvcpljh5fwlj2ed27a.appsync-api.us-west-2.amazonaws.com/graphql", // ENTER YOUR GRAPHQL ENDPOINT HERE
    fetch,
    headers: {
      "x-api-key": "da2-wjftle3ep5dodevrprsrbvdyxq", // ENTER YOUR API KEY HERE
    },
  }),
  cache: new InMemoryCache(),
})
