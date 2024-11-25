"use client"

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { XSquare } from 'react-bootstrap-icons';

import TableData from '../Table';

interface DataType {
  key: string;
  name: string;
  weight: string;
  category: string;
}

interface ChildRef {
  search: (text: string) => void;
}

const HomeContainer = () => {
  const [showTable, setShowTable] = useState(false);

  const childRef = useRef<ChildRef>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (childRef.current) {
      childRef.current.search(e.target.value !== '' ? e.target.value : '');
    }
  };

  return <section>
    <section className={`transition-all ease-in-out duration-200`}>
      <section className='w-screen lg:flex justify-between relative md:h-[50vh] md:pt-20 px-14'>
        <Image className={`w-36 md:w-40 object-cover z-10 absolute top-0 left-8 md:left-20 ${showTable ? "-mt-6" : "mt-6"} md:mt-8`} src={'/images/logo-gob-sec-amb-des.png'} alt='Copito' width={1920} height={1080}/>
        <Image className={`w-16 md:w-24 object-cover z-10 absolute top-12 md:top-0 right-10 md:right-24 ${showTable ? "-mt-6" : "mt-6"} md:mt-8`} src={'/images/logo-corpocuencas.png'} alt='Copito' width={1920} height={1080}/>
        <Image className={`object-contain z-10 mx-auto transition-all ease-in-out ${showTable ? 'absolute md:static translate-y-16 md:translate-y-2 lg:-translate-y-36 xl:-translate-y-[9.5rem] 2xl:-translate-y-44 3xl:-translate-y-52 w-60 md:w-1/3 lg:w-60 left-1/2 lg:left-auto -translate-x-1/2 md:-translate-x-56 lg:translate-x-36 2xl:translate-x-16' : 'md:-translate-y-20 lg:translate-y-0 translate-x-[80%] md:translate-x-56 lg:translate-x-6 w-1/2 md:w-1/3 lg:w-1/2'}`} src={'/images/banner/logo.png'} alt='Copito' width={1920} height={1080}/>
        <section className={`flex flex-col p-6 md:p-2 justify-center items-center transition-all ease-in-out duration-300 mx-auto ${showTable ? 'h-[20vh] px-8 md:w-1/3 md:-translate-y-48 lg:translate-y-0 md:translate-x-32 lg:translate-x-24 mt-10' : 'md:-translate-y-32 lg:translate-y-0 h-full px-8 md:px-24 lg:px-6 lg:mr-16 w-full lg:w-1/2'}`}>
          <Image className={`h-full w-min aspect-square object-contain z-10 drop-shadow-lg transition-all ease-in-out duration-300 ${showTable ? 'scale-150 lg:scale-[2.6] opacity-0 select-none pointer-events-none lg:select-auto lg:pointer-events-auto lg:opacity-100' : 'scale-125 lg:h-80'}`} src={'/images/banner/copito1.png'} alt='Copito' width={2566} height={3225}/>
          <Link href={'/formulario'} className={`border-4 border-white/50 px-6 py-2 font-bold text-white rounded-3xl bg-[#269E94] z-30 transition-all duration-200 ease-in-out ${showTable ? 'opacity-0 select-none pointer-events-none' : 'text-lg lg:text-4xl'}`}>Registrarme</Link>
        </section>
      </section>
    </section>
    <section className={`flex flex-col-reverse md:flex-col md:mt-6 lg:mt-0 md:gap-4 lg:gap-0 lg:flex-row items-center w-full transition-all ease-in-out duration-300 absolute ${showTable ? 'top-16 md:top-[25.5rem] lg:top-10 2xl:top-20 3xl:top-32' : 'md:top-1/2'}`}>
      <section className={`lg:pl-28 flex flex-col lg:flex-row items-end gap-2 md:gap-4 lg:gap-6 w-[92%] lg:w-1/2 justify-center transition-all ease-in-out duration-300 ${showTable ? 'w-2/3' : 'w-1/2 pt-6 lg:pt-12 xl:pt-0'}`}>
        <div className={"flex flex-col items-center lg:items-start justify-start gap-2 md:gap-4 lg:gap-6 w-full"}>
          <h2 className={"text-center w-full lg:w-auto text-xl xl:text-3xl font-bold"}>¡Consulta cuanto llevas!</h2>
            <input onFocus={() => setShowTable(true)}
              onChange={handleInputChange}
              className={`border-b-2 px-4 py-2 transition-all ease-in-out duration-300 rounded-lg ${showTable ? 'w-full' : 'w-full lg:w-96'}`}
              placeholder="Colegio ... - Comuna 8, 9 - Junta de acción comunal"/>
        </div>
        <button className="border-4 border-white/50 px-6 py-2 font-bold text-white rounded-3xl bg-[#269E94] w-full lg:w-auto">Buscar</button>
        <button className={`absolute lg:mb-2 top-32 md:-top-16 lg:top-auto left-12 lg:left-auto lg:relative transition-all duration-200 ease-in-out ${showTable ? 'opacity-100 px-2 py-1 rounded bg-white/60 backdrop-blur-xl font-semibold border border-gray-600 text-sm' : 'opacity-0 pointer-events-none select-none'}`}
          onClick={() => setShowTable(false)}>Volver</button>
        <button className={`absolute lg:h-8 aspect-square lg:hidden left-2 lg:left-auto text-black/50 z-30 bg-slate-500/30 rounded-lg backdrop-blur transition-all duration-300 ease-in-out ${showTable ? "opacity-100 pointer-events-auto select-auto top-32 lg:top-auto" : "opacity-0 pointer-events-none select-none top-[82vh] md:top-[88vh] lg:top-auto"}`}
          onClick={() => setShowTable(false)}><XSquare size={32} color="#3C3C3B" className="text-[#3C3C3B]"/>
        </button>
      </section>
      <section className={`xl:text-xl text-center lg:text-left md:px-16 lg:px-28 lg:py-24 w-[90%] lg:w-1/2 xl:w-[52rem] text-[#3C3C3B] transition-all ease-in-out ${showTable ? 'opacity-0 pointer-events-none select-none' : ''}`}>
        <p className='text-center'>
        <span className="font-bold">"COPITO, RECICLA"</span> se destaca como una iniciativa ejemplar de gobernanza ambiental que busca no solo sensibilizar, sino también generar un impacto real en la sostenibilidad del Valle del Cauca. <br />
        A través de la participación activa de actores clave como la comunidad educativa y las Juntas de Acción Comunal, se fomenta un sentido de corresponsabilidad en la gestión de residuos, un tema esencial en la lucha contra el cambio climático.
        </p>
      </section>
    </section>
    <section className={`absolute top-[48%] md:top-[50%] lg:top-[42%] px-4 lg:px-24 box-border ${showTable ? 'block' : 'hidden'}`}>
      <TableData ref={childRef}/>
    </section>
  </section>;
}

export default HomeContainer;