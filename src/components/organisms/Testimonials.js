'use client';

import { dataSite } from '@/data';

const testimonials = dataSite.references;

// Función para generar color por nombre
const getBackgroundColor = (name) => {
  return '#f0f8fc';
};

export default function TestimonialsSection() {
  return (
    <section id='testimonials' className='bg-[#0b2e4a] py-16 px-6 md:px-20'>
      <div className='max-w-6xl mx-auto text-center mb-12'>
        <h2 className='text-3xl font-bold text-[#fff] mb-4'>
          What Our Clients Say
        </h2>
        <p className='text-[#fff] text-md'>
          Hear from people we’ve helped with their legal paperwork and
          consulting needs.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-6 '>
        {testimonials.map((testimonial, index) => {
          const initials = testimonial.name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .substring(0, 2)
            .toUpperCase();

          const showImage =
            testimonial.image && testimonial.image.trim() !== '';

          return (
            <div
              key={index}
              className='bg-[#f0f8fc] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-left flex flex-col items-start group'
            >
              <div className='flex items-center mb-4'>
                <h3 className='text-lg font-semibold text-[#1F2937]'>
                  {testimonial.name}
                </h3>
              </div>
              <p className='text-sm text-[#4B5563] group-hover:text-[#1F2937] transition-colors'>
                “{testimonial.description}”
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
