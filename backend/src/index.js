import { ApolloServer } from "apollo-server";
import database from "./config/database";
import { resolvers } from "./resolvers"
import { typeDefs } from "./typeDefs"
import routes from "./routes";

database.connect();

const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.PORT || 3333;

server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});