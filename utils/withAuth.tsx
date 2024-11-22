import { getSession } from "next-auth/react";
import { NextPage } from "next";

export const withAuth = (Page: NextPage) => {
  const AuthenticatedPage: NextPage = (props) => <Page {...props} />;
  AuthenticatedPage.getInitialProps = async (ctx) => {
    const session = await getSession(ctx);
    if (!session) {
      ctx.res?.writeHead(302, { Location: "/api/auth/signin" });
      ctx.res?.end();
      return {};
    }
    return {};
  };
  return AuthenticatedPage;
};
