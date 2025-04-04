const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Mission {
    id: ID
    mission_name: String
    launch_year: String
  }

  type Query {
    missions: [Mission]
  }

  type Mutation {
    addMission(mission_name: String!, launch_year: String!): Mission
  }
`;

module.exports = typeDefs;
