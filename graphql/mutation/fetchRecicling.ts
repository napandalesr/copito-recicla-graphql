import { gql } from "@apollo/client";

export const FETCH_MUTATION_RECICLING = gql`
  mutation CreateReciclyng($input: ReciclyngInput) {
    createReciclyng(input: $input) {
      id
      weight
    }
  }
`;