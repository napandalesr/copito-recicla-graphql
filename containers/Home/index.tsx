"use client"

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { XSquare } from 'react-bootstrap-icons';

import TableData from '../Table';

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

  return <section className='min-h-screen'>
    <section className={`transition-all ease-in-out duration-200 min-h-[50vh] relative`}>
      <section className='w-screen lg:flex justify-between relative md:h-[50vh] md:pt-20 xl:pt-32 px-14'>
        <section className={`flex flex-col gap-6 md:w-1/2  md:pt-8 transition-all ease-in-out mx-auto md:mx-0 ${showTable ? "absolute top-10 left-1/4 md:left-10 h-40 2xl:h-56" : "pt-20"}`}>
          <Image className={` md:h-[60%] object-contain`} src={'/images/logo-gob-sec-amb-des.png'} alt='Copito' width={1920} height={1080}/>
          <Image className={`w-1/4 mx-auto md:h-[40%] object-contain`} src={'/images/logo-corpocuencas.png'} alt='Copito' width={1920} height={1080}/>
        </section>
        <section className={`flex flex-col p-6 md:p-2 justify-center items-center transition-all ease-in-out duration-300 mx-auto ${showTable ? 'h-[20vh] px-8 md:w-1/3 md:-translate-y-48 lg:translate-y-0 md:translate-x-32 lg:translate-x-24 mt-10' : 'md:-translate-y-32 lg:translate-y-0 h-full px-8 md:px-24 lg:px-6 w-full lg:w-1/2'}`}>
          <Image className={`h-full w-min scale-150 md:scale-100 aspect-square object-contain z-10 drop-shadow-lg transition-all ease-in-out duration-300 ${showTable ? 'scale-150 lg:scale-[2.6] opacity-0 select-none pointer-events-none lg:select-auto lg:pointer-events-auto lg:opacity-100' : 'mb-2 lg:w-[80%]'}`} src={'/images/copito-log.png'} alt='Copito' width={2566} height={3225}/>
          <Link href={'/formulario'} className={`border-4 border-white/50 px-6 py-2 font-bold text-white rounded-3xl bg-[#269E94] z-30 transition-all duration-200 ease-in-out ${showTable ? 'opacity-0 select-none pointer-events-none' : 'text-lg lg:text-2xl'}`}>Registrarme</Link>
        </section>
      </section>
    </section>
    <section className={`flex flex-col-reverse md:flex-col  relative md:mt-6 lg:mt-0 md:gap-4 lg:gap-0 lg:flex-row items-center w-full transition-all ease-in-out duration-300 ${showTable ? 'top-16 md:top-[25.5rem] lg:top-10 2xl:top-20 3xl:top-32 absolute' : 'md:top-1/2 min-h-[50vh]'}`}>
      <section className={`lg:pl-28 flex flex-col lg:flex-row items-end gap-2 md:gap-4 lg:gap-6 w-[92%] lg:w-1/2 justify-center transition-all ease-in-out duration-300 ${showTable ? 'absolute md:static -top-[80%] xl:-mt-[35%] lg:w-[40%]' : 'w-1/2 pt-6 lg:pt-12 xl:pt-0'}`}>
        <div className={"flex flex-col items-center lg:items-start justify-start gap-2 md:gap-4 lg:gap-6 w-full mb-8"}>
          <h2 className={"text-center w-full lg:w-auto text-xl xl:text-3xl font-bold"}>¡Consulta cuánto llevas!!</h2>
          <section className='w-full flex flex-col md:flex-row gap-1 md:gap-6'>
            <input onFocus={() => setShowTable(true)}
              onChange={handleInputChange}
              className={`border-b-2 px-4 py-2 transition-all ease-in-out duration-300 rounded-lg ${showTable ? 'w-full' : 'w-full lg:w-1/2'}`}
              placeholder="Colegio ... - Comuna 8, 9 - Junta de acción comunal"/>
              <button className="border-4 border-white/50 px-6 py-2 font-bold text-white rounded-3xl bg-[#269E94] w-full lg:w-auto">Buscar</button>
          </section>
        </div>
        {
          showTable && <>
          <button className={`absolute lg:mb-2 top-32 md:-top-16 lg:-top-8 left-12 lg:left-auto lg:relative transition-all duration-200 ease-in-out ${showTable ? 'opacity-100 px-2 py-1 rounded bg-white/60 backdrop-blur-xl font-semibold border border-gray-600 text-sm hidden md:block' : 'opacity-0 pointer-events-none select-none'}`}
          onClick={() => setShowTable(false)}>Volver</button>
          <button className={`lg:h-8 aspect-square lg:hidden left-2 lg:left-auto text-black/50 z-30 bg-slate-500/30 rounded-lg backdrop-blur transition-all duration-300 ease-in-out ${showTable ? "opacity-100 pointer-events-auto select-auto fixed md:absolute top-12 lg:top-auto" : "opacity-0 pointer-events-none select-none top-[82vh] md:top-[88vh] lg:top-auto"}`}
            onClick={() => setShowTable(false)}><XSquare size={32} color="#3C3C3B" className="text-[#3C3C3B]"/>
          </button>
          </>
        }
        
      </section>
      <section className={`xl:text-xl text-center lg:text-left md:px-10 xl:px-14 2xl:px-28 lg:py-10 w-[90%] lg:w-1/2 text-[#3C3C3B] transition-all ease-in-out ${showTable ? 'opacity-0 pointer-events-none select-none' : ''}`}>
        <p className='text-center'>
        <span className="font-bold">"COPITO, RECICLA"</span> se destaca como una iniciativa ejemplar de gobernanza ambiental que busca no solo sensibilizar, sino también generar un impacto real en la sostenibilidad del Valle del Cauca. <br />
        A través de la participación activa de actores clave como la comunidad educativa y las Juntas de Acción Comunal, se fomenta un sentido de corresponsabilidad en la gestión de residuos, un tema esencial en la lucha contra el cambio climático.
        </p>
      </section>
    </section>
    <section className={`md:absolute -mt-[68%] md:mt-20 md:top-[50%] lg:top-[42%] px-4 lg:px-24 box-border ${showTable ? 'block' : 'hidden'}`}>
      <TableData ref={childRef}/>
    </section>
  </section>;
}

export default HomeContainer;