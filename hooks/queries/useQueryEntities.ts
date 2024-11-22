import { useQuery } from "@apollo/client";

import { FETCH_ENTITIES } from "../../graphql/queries/fetchEntities";

export const useQueryEntities = () => {
  const { data, loading, error } = useQuery(FETCH_ENTITIES);

  return {
    entities: data?.findAllEntities || [],
    loading,
    error,
  };
};
