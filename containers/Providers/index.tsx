import client from '@/graphql/client';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import AuthProvider from './AuthProvider';

type Props = {
  children?: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <SessionProvider>
    <AuthProvider>
      <ApolloProvider client={client}>
      <AntdRegistry>
        {children}
      </AntdRegistry>
    </ApolloProvider>
    </AuthProvider>
  </SessionProvider>;
}

export default Providers;