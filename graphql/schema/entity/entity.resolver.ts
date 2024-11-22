import prisma from "@/prisma";
import { $Enums, Entity } from "@prisma/client";

type InputEntity = {
  input: Entity
}

type entityByReciclingType = {
  id: number,
  name: string,
  weight: number,
  category: $Enums.CATEGORY,
  nameEntity: string
}

export const entityResolvers = {
  Query: {
    findAllEntities: async (): Promise<Entity[]> => await prisma.entity.findMany(),
    findAllEntitiesByReciclyn: async () => {
      const entities = await prisma.entity.findMany({
        include: {
          reciclyng: true
        }
      });
      const entityByWeight: entityByReciclingType[] = [];
      entities.forEach(entity => {
        let weight = 0;
        weight = entity.reciclyng.reduce((suma, reciclyng) => suma + parseFloat(reciclyng.weight), 0);
        entityByWeight.push({
          id: entity.id,
          name: entity.name,
          weight: weight,
          category: entity.category,
          nameEntity: entity.nameEntity
        });
      });

      return entityByWeight;
    },
    findEntity: async (_parent: unknown, args: { id: number }): Promise<Entity | null> => await findEntity(args.id)
  },
  Mutation: {
    createEntity: async(_: unknown, args: InputEntity): Promise<Entity> => {
      return await prisma.entity.create({
        data: {
          ...args.input
        }
      })
    },
    updateEntity: async(_: unknown, args: InputEntity): Promise<Entity> => {
      return await prisma.entity.update({
        where: {
          id: args.input.id
        },
        data: args.input
      })
    }
  }
}

const findEntity = async (id: number): Promise<Entity | null> =>
  await prisma.entity.findFirst({
    where: {
      id
    }
  });
