import { gql } from "apollo-server-micro";

export const UserTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    findAllusers: [User!]!
    findUser(id: ID!): User
    findUserByEmail(email: String!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
  }
`;
