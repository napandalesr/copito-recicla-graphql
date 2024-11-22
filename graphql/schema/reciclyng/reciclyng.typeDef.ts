import { gql } from "apollo-server-micro";

export const ReciclyngTypeDefs = gql`
  type Reciclyng {
    id: ID!
    weight: String!
    createdAt: String
  }

  input ReciclyngInput {
    weight: String!
    entityId: Int!
  }

  type Mutation {
    createReciclyng(input: ReciclyngInput): Reciclyng
  }
`

