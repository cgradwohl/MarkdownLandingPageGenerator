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
      world: "Hello World"
    })
  }
}

const server = new ApolloServer({ typeDefs: schema, resolvers })

export const handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  }
})