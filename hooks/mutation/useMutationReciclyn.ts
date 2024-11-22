import { useMutation } from "@apollo/client";

import { FETCH_MUTATION_RECICLING } from "@/graphql/mutation/fetchRecicling";
import { reciclyngType } from "@/types/recicling";

export const useMutationReciclyn = () => {
  const [createReciclyng, { loading }] = useMutation(FETCH_MUTATION_RECICLING);

  const useHandleCreateReciclyn = async (data: reciclyngType) => {
    const { entityId, weight } = data;
    return await createReciclyng({
      variables: {
        input: {
          weight,
          entityId
        }
      }
    })
  };

  return { useHandleCreateReciclyn, loading };
};
