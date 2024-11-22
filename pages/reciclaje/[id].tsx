"use client"

import { useParams } from 'next/navigation';
import React from 'react';

import Loading from '@/components/Loading';
import Register from '@/containers/Register';
import { useQueryEntityById } from '@/hooks/queries/useQueryEntityById';
import Header from '@/components/Header';

const ReciclajeId = () => {
  const params = useParams<{ id: string }>();
  const { entities, error, loading } = useQueryEntityById(parseInt(params.id));
  
  if (loading) {
    return <Loading text="Cargando..." type="bars"/>
  }

  return <main className='bg-[url(/images/bg.png)] bg-no-repeat bg-cover'>
    <Header/>
    <Register
      entity={entities}
      />
  </main>;
}

export default ReciclajeId;