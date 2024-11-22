import { useMutation } from "@apollo/client";

import { EntityType } from "@/types/entity";
import { FETCH_MUTATION_ENTITY } from "@/graphql/mutation/fetchEntity";

export const useMutationEntity = () => {
  const [createEntity, { loading }] = useMutation(FETCH_MUTATION_ENTITY);

  const useHandleCreateEntity = async (data: EntityType) => {
    return await createEntity({
      variables: {
        input: {
          ...data
        }
      }
    })
  };

  return { useHandleCreateEntity, loading };
};
