import express from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";
import schema from "./schema.js";
import mongoose from 'mongoose'
const server = express();
const port = 4000;

server.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

mongoose.connect('mongodb://localhost/graphqlv1');

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('connection to database was successful:')
});

server.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

server.listen(port, () => {
  console.log(`server start on port ${port}`);
});
schema;
