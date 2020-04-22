import { ApolloServer, gql } from "apollo-server-lambda";

import { updateUser } from './mutations';
// this is where we define the shape of our API
const schema = gql`
  type Hello {
    world: String
  }

  type User {
    userId: String,
    createdAt: String,
    lastSignedInAt: String
  }

  type Query {
    hello: Hello
  }

  type Mutation {
    updateUser(userId: String): User 
  }
`

// map the shape to functions
const resolvers = {
  Query: {
    hello: () => ({
      world: "hello there my human creatures."
    })
  },

  Mutation: {
    updateUser
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