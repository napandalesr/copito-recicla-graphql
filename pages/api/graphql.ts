import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { NextApiRequest, NextApiResponse } from "next";

import { typeDefs, resolvers } from "../../graphql/schema";

const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const startServer = apolloServer.start();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
};

export default cors((req, res) => handler(req as any, res as any));

export const config = {
  api: {
    bodyParser: false,
  },
};
