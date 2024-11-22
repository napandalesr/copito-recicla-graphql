import { useMutation } from "@apollo/client";

import { EntityType } from "@/types/entity";
import { FETCH_MUTATION_UPDATE_ENTITY } from "@/graphql/mutation/fetchEntity";

export const useMutationUpdateEntity = () => {
  const [updateEntity, { loading }] = useMutation(FETCH_MUTATION_UPDATE_ENTITY);

  const useHandleUpdateEntity = async (data: EntityType) => {
    return await updateEntity({
      variables: {
        input: {
          ...data
        }
      }
    })
  };

  return { useHandleUpdateEntity, loading };
};
