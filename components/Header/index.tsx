import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CaretLeft } from 'react-bootstrap-icons';

const Header = () => {
  return <header className='flex justify-between gap-10 py-2 px-12 items-center '>
    <Link href={'/'} className='w-36 md:w-56  flex justify-start items-center'><CaretLeft className='border-2 border-gray-600 rounded' size={30}/></Link>
    <Image className={`w-36 md:w-40 object-cover `} src={'/images/copito.png'} alt='Copito' width={1920} height={1080}/>
    <Image className={`w-36 md:w-56 lg:w-56 object-cover `} src={'/images/banner/logo.png'} alt='Copito' width={1920} height={1080}/>
  </header>;
}

export default Header;