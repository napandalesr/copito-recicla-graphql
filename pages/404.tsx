import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className='p-6 md:py-16 lg:p-24 min-w-screen min-h-screen box-border bg-[url(/images/bg.png)] bg-no-repeat bg-cover flex items-center flex-col md:flex-row'>
      <Image className='w-1/2 md:w-1/3' src={'/images/404.png'} width={922} height={1352} alt='404'/>
      <section className='h-full flex flex-col items-center justify-between gap-3'>
        <h2 className='text-5xl font-bold'>Extraviado</h2>
        <p>No se pudo encontrar el recurso solicitado</p>
        <Link href="/" className='text-cyan-600'>Volver al inicio</Link>
      </section>
    </main>
  )
}