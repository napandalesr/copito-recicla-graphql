
import prisma from "@/prisma";

type InputReciclyng = {
  input: Reciclyng
}

export const reciclyngResolver = {
  Mutation: {
    createReciclyng: async (_: unknown, args: InputReciclyng): Promise<Reciclyng> => {
      return await prisma.reciclyng.create({
        data: args.input
      });
    }
  }
};

type Reciclyng = {
  id: number;
  createdAt: Date;
  weight: string;
  entityId: number;
}