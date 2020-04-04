import { ApolloServer, gql } from "apollo-server-lambda";

// this is where we define the shape of our API
const schema = gql`
  type Hello {
    world: String
  }

  type Query {
    hello: Hello
  }
`

// map the shape to functions
const resolvers = {
  Query: {
    hello: () => ({
      world: "hello creaturessssss"
    })
  }
}

const server = new ApolloServer({
  typeDefs: schema, resolvers
});


/**
 * exporting the handler function
 */
export const handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  }
});