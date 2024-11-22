import { gql } from "@apollo/client";

export const FETCH_MUTATION_ENTITY = gql`
  mutation CreateEntity($input: EntityInput!) {
    createEntity(input: $input) {
      name
      category
      email
      city
      neighborhood
      commune
      position
      address
      phone
      acopio
      prae
      praeName
      proceda
      procedaProject
      committee
      attachment
    }
  }
`;

export const FETCH_MUTATION_UPDATE_ENTITY = gql`
  mutation UpdateEntity($input: EntityInput!) {
    updateEntity(input: $input) {
      id
      name
      nameEntity
      category
      email
      city
      neighborhood
      commune
      position
      address
      phone
      acopio
      acopioName
      prae
      praeName
      proceda
      procedaProject
      committee
      attachment
    }
  }
`