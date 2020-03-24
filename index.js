const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');
const GraphQLDateTime = require('graphql-type-datetime');

const { machines } = require('./data');

const typeDefs = gql`
  scalar DateTime

  type Sensor {
    id: ID!
    name: String!
    sensorDataPoints: [SensorDataPoint!]
  }

  type SensorDataPoint {
    timestamp: DateTime!
    value: Float!
  }

  type Machine {
    id: ID!
    name: String!
    sensors: [Sensor!]
  }

  type Query {
    machine(id: ID!): Machine
    machines: [Machine!]
    sensorData(id: ID!, from: DateTime!, to: DateTime!): [SensorDataPoint]
  }

  schema {
    query: Query
  }
`;

const resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    machines: () => machines,
    machine: (_, { id }) => machines.find(item => item.id === id),
  },
};

const port = 4000;
const path = '/graphql';
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

app.use(bodyParser.json());

server.applyMiddleware({ app, path });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
  console.log(`Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`)
})
