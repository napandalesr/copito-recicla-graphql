import { useQuery } from "@apollo/client";

import { FETCH_ENTITY_BY_ID } from "../../graphql/queries/fetchEntities";
import { ACTION_RESTORE } from "next/dist/client/components/router-reducer/router-reducer-types";

export const useQueryEntityById = (id: number) => {
  const { data, loading, error } = useQuery(FETCH_ENTITY_BY_ID, {
    variables: { findEntityId: id },
    skip: !id,
  });

  return {
    entities: {
      acopio: data?.findEntity.acopio,
      acopioName: data?.findEntity.acopioName,
      address: data?.findEntity.address,
      attachment: data?.findEntity.attachment,
      category: data?.findEntity.category,
      city: data?.findEntity.city,
      committee: data?.findEntity.committee,
      commune: data?.findEntity.commune,
      email: data?.findEntity.email,
      id: data?.findEntity.id,
      name: data?.findEntity.name,
      nameEntity: data?.findEntity.nameEntity,
      neighborhood: data?.findEntity.neighborhood,
      phone: data?.findEntity.phone,
      position: data?.findEntity.position,
      prae: data?.findEntity.prae,
      praeName: data?.findEntity.praeName,
      proceda: data?.findEntity.proceda,
      procedaProject: data?.findEntity.procedaProject,
    },
    loading,
    error,
  };
};

/**{
      "acopio": false,
      "acopioName": null,
      "address": "Carrera 67a #11a21",
      "attachment": "/uploads/1732293880050-COPITO RECICLA (NUEVO) .pdf",
      "category": "JAC",
      "city": "cali",
      "committee": false,
      "commune": 5,
      "email": "napandalesr@gmail.com",
      "id": "2",
      "name": "Test name",
      "nameEntity": "test jac",
      "neighborhood": "barrio",
      "phone": 123456,
      "position": "Test cargo",
      "prae": false,
      "praeName": null,
      "proceda": false,
      "procedaProject": null
  } */
