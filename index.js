const http = require('http');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const GraphQLDateTime = require('graphql-type-datetime');

const { machines } = require('./data');

const typeDefs = gql`
  scalar DateTime

  type GPSPosition {
    lat: Float!
    lng: Float!
  }

  type Sensor {
    _id: ID!
    name: String!
    machine: Machine!
  }

  type SensorDataPoint {
    timestamp: DateTime!
    value: Float!
  }

  type Machine {
    _id: ID!
    name: String!
    sensors: [Sensor!]
    lastKnownPosition: GPSPosition
    date: DateTime
  }

  type Query {
    machine: Machine
    machines: [Machine!]
    sensorData(id: ID!, from: DateTime!, to: DateTime!): [SensorDataPoint]
  }
`;

const resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    machines: () => machines,
  },
};

const port = 4000;
const path = '/graphql';
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
  console.log(`Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`)
})
