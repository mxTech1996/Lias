'use client';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Project Management',
    description:
      'Comprehensive planning, coordination, and oversight to deliver projects on time and within budget.',
  },
  {
    title: 'Feasibility Studies',
    description:
      'Analysis of project viability, including site conditions, costs, and regulatory compliance.',
  },
  {
    title: 'Pre-Construction Consulting',
    description:
      'Support in design review, budgeting, and scheduling before construction begins.',
  },
  {
    title: 'Quality Control & Safety Management',
    description:
      'Monitoring quality and safety standards to ensure successful project execution.',
  },
  {
    title: 'Contract & Risk Management',
    description:
      'Advising on contract structuring, negotiation, and risk mitigation strategies.',
  },
  {
    title: 'Sustainability Consulting',
    description:
      'Guidance on sustainable materials, energy efficiency, and green building certifications.',
  },
];

export default function PracticeAreas() {
  return (
    <section className='grid md:grid-cols-[300px_1fr]'>
      <div className='bg-[#eaf4f7] flex flex-col justify-center px-8 py'>
        <h2 className='text-4xl font-bold text-[#0a2c4a] mb-2'>Practice</h2>
        <h3 className='text-3xl text-[#0a2c4a]'>Areas</h3>
      </div>
      <div className='px-8 grid grid-cols-1 md:grid-cols-2 gap-10 py-36'>
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='flex items-start gap-4'
          >
            <div className='w-3 h-3 bg-[#49B7C1] mt-2' />
            <div>
              <h4 className='text-lg font-semibold text-[#0a2c4a]'>
                {service.title}
              </h4>
              <p className='text-[#0a2c4a]'>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
