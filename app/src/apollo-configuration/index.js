import ApolloClient from 'apollo-boost'

// NOTE: We will need more configuration later for headers and whatnot.
// https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost#apollo-boost-options
const client = new ApolloClient({ uri: process.env.PACING_ENDPOINT })

export default client
