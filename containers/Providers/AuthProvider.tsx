import Loading from '@/components/Loading';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const { status } = useSession();

  if (status == "loading") {
    return <Loading text="Cargando..." type="bars"/>
  }
  return children
}

export default AuthProvider;