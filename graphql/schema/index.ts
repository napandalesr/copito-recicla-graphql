import { userResolvers, UserTypeDefs } from "./user";
import { EntityTypeDefs, entityResolvers } from "./entity";
import { ReciclyngTypeDefs, reciclyngResolver } from "./reciclyng";

import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';

export const typeDefs = mergeTypeDefs([UserTypeDefs, EntityTypeDefs, ReciclyngTypeDefs]);
export const resolvers = mergeResolvers([userResolvers, entityResolvers, reciclyngResolver]);