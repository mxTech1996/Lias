'use client';

import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import InfoSection from '@/components/organisms/Info';
import Intro from '@/components/organisms/Intro';
import Navbar from '@/components/organisms/Navbar';
import ProductsSection from '@/components/organisms/Products';
import ServicesSection from '@/components/organisms/Services';
import TestimonialsSection from '@/components/organisms/Testimonials';
import OurVisionSection from '@/components/organisms/Vision';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <OurVisionSection />
      <InfoSection />
      <ProductsSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
