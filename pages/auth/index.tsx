"use client"

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '@/hooks/useAuth';
import LoginForm from '@/containers/LoginForm';
import { message } from 'antd';

const Auth = () => {
  const router = useRouter();
  const { session, login } = useAuth();

  useEffect(() => {
    if (router.query.error) {
      message.error({
        content: "Credenciales incorrectas"
    });
    }
  }, [router.query.error]);

  if(session) {
    router.push("/");
  }

  return <main className='flex flex-col justify-center items-center w-screen h-screen bg-[url(/images/bg.png)] bg-no-repeat bg-cover'>
    <LoginForm login={login}/>
  </main>;
}

export default Auth;