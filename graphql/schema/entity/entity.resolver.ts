import { UserInputError } from "apollo-server-micro";

import prisma from "@/prisma";
import { EntityType, EntityTypeUp } from "@/types/entity";

type InputEntity = {
  input: EntityType
}

type entityByReciclingType = {
  id: number,
  name: string,
  weight: number,
  city: string,
  category: "JAC" | "CE",
  nameEntity: string
}

export const entityResolvers = {
  Query: {
    findAllEntities: async (): Promise<EntityType[]> => await prisma.entity.findMany(),
    findAllEntitiesByReciclyn: async () => {
      const entities = await prisma.entity.findMany({
        include: {
          reciclyng: true
        }
      });
      const entityByWeight: entityByReciclingType[] = [];
      /* eslint-disable @typescript-eslint/no-explicit-any */
      entities.forEach((entity: EntityToW) => {
        let weight = 0;
        weight = entity.reciclyng.reduce((suma, reciclyng) => suma + parseFloat(reciclyng.weight), 0);
        entityByWeight.push({
          id: entity.id,
          name: entity.name,
          weight: weight,
          category: entity.category,
          nameEntity: entity.nameEntity,
          city: entity.city
        });
      });

      return entityByWeight;
    },
    findEntity: async (_parent: unknown, args: { id: number }): Promise<EntityType | null> => await findEntity(args.id)
  },
  Mutation: {
    createEntity: async(_: unknown, args: EntityTypeUp): Promise<EntityType> => {
      const entityExist = await findEntityByEmail(args.input.email);
      if(entityExist) {
        throw new UserInputError('Este correo ya se encuentra registrado', {
          code: 400,
          status: 400,
        })
      }
        
      return await prisma.entity.create({
        data: {
          ...args.input
        }
      })
    },
    updateEntity: async(_: unknown, args: InputEntity): Promise<EntityType> => {
      const { id, ...data } = args.input;
      return await prisma.entity.update({
        where: {
          id: id
        },
        data
      })
    }
  }
}

const findEntity = async (id: number): Promise<EntityType | null> =>
  await prisma.entity.findFirst({
    where: {
      id
    }
  });

  const findEntityByEmail = async (email: string): Promise<EntityType | null> =>
    await prisma.entity.findFirst({
      where: {
        email
      }
    });


type EntityToW = {
  id: number,
  name: string,
  category: "JAC" | "CE",
  nameEntity: string,
  city: string,
  reciclyng: {
    id: number;
    createdAt: Date;
    weight: string;
    entityId: number;
}[];
}