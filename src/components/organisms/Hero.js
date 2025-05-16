'use client';

import { dataSite } from '@/data';

export default function HeroSection() {
  const url = dataSite.image_hero;
  return (
    <section
      className='relative h-screen bg-fixed bg-cover bg-center flex items-center'
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className='bg-blue-900/70 p-8 rounded-lg max-w-md ml-10 text-white'>
        <h1 className='text-4xl font-bold mb-2'>LI-AS</h1>
        <h2 className='text-2xl mb-4'> {dataSite.subtitle} </h2>
        <p>{dataSite.description} </p>
      </div>
    </section>
  );
}
