import http from "http";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

//internal imports
import { Payment } from "./payment";

const app = express();
const httpserver = http.createServer(app);

// typeDefs schema
const typeDefs = `
  ${Payment.typeDefs}
`;

// resolvers
const resolvers = {
  Query: {
    ...Payment.resolvers.Query,
  },

  Mutation: {
    ...Payment.resolvers.Mutation,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer: httpserver })],
});

export default server;
