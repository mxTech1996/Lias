'use client';

import { useCart } from 'ecommerce-mxtech';
import Link from 'next/link';
// cart icon
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function StickyNavbar() {
  const { products } = useCart();
  return (
    <header className='sticky top-0 z-50 bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-3'>
        <div className='flex items-center gap-2'>
          <div className='w-6 h-6 bg-gradient-to-tr from-blue-900 to-cyan-400 rotate-45'></div>
          <span className='text-lg font-semibold text-blue-900'>
            <Link href='/'>LI-AS</Link>
          </span>
        </div>

        <nav className='flex gap-6 text-sm font-medium'>
          <Link href='/' className='text-blue-800'>
            HOME
          </Link>
          <Link href='/#testimonials'>Testimonials</Link>
          <Link href='/#our-vision'>OUR VISION</Link>
          <Link href='/#products'>Products</Link>
          <Link href='/#services'>SERVICES</Link>
          <Link href='/more-information'>CONTACT</Link>

          {/* cart button with counter*/}
          <Link href='/cart' className='relative'>
            <AiOutlineShoppingCart className='text-2xl text-blue-800' />
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1'>
              {products.length}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
