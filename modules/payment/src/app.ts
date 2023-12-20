import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";

// internal imports
import server from "./graphql";
import { port } from "./config/config";
import { connectDB } from "./db/db";

// create apollo server and run it
async function createServer() {
  const app = express();

  // connect db
  await connectDB();

  // express middleware
  app.use(cors(), express.json());

  // start graphql
  await server.start();

  // middleware for graphql
  app.use("/graphql", expressMiddleware(server));

  app.listen(port, () => {
    console.log(`Graphql is running on http://localhost:${port}/graphql`);
  });
}

createServer();
