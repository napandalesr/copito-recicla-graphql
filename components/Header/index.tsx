
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CaretLeft } from 'react-bootstrap-icons';

const Header = () => {
  const router = useRouter();
  return <header className='flex justify-between gap-10 py-2 px-12 items-center '>
    <button onClick={() => router.back()} className='w-36 md:w-56  flex justify-start items-center'><CaretLeft className='border-2 border-gray-600 rounded' size={30}/></button>
    <Image className={`w-36 md:w-40 object-cover `} src={'/images/copito.png'} alt='Copito' width={1920} height={1080}/>
    <Image className={`w-36 md:w-56lg:w-56 object-cover `} src={'/images/banner/logo.png'} alt='Copito' width={1920} height={1080}/>
  </header>;
}

export default Header;