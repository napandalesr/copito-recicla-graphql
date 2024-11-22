import { UserInputError } from "apollo-server-micro";
import bcrypt from 'bcrypt';

import prisma from "@/prisma";
import { User } from "@prisma/client";

export const userResolvers = {
  Query: {
    findAllusers: async (): Promise<User[]> => await prisma.user.findMany(),
    findUser: async (_parent: unknown, args: { id: string }): Promise<User | null> => await findUser(args.id),
    findUserByEmail: async (_parent: unknown, args: { email: string }): Promise<User | null> => await findUserByEmail(args.email),
  },
  Mutation: {
    createUser: async(_: unknown, args: User): Promise<{id: string, name: string, email: string}> => {
      const { name, email, password } = args;
      const userExist = await findUserByEmail(email);
      if(userExist) {
        throw new UserInputError('El usuario ya se encuentra registrado', {
          code: 400,
          status: 400,
        })
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const response = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword
        }
      });
      return { id: response.id, name, email };
    }
  }
};

const findUser = async (id: string): Promise<User | null> =>
  await prisma.user.findFirst({
    where: {
      id: id
    }
  });

const findUserByEmail = async (email: string): Promise<User | null> =>
  await prisma.user.findFirst({
    where: {
      email
    }
  });
