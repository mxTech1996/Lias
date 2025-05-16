'use client';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';

export default function ProductsSection() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  const team = dataSite.products;
  return (
    <section id='products' className='bg-[#f0f8fc] py-12 px-6 text-center'>
      <h2 className='text-3xl font-semibold mb-10'>OUR CONSULTING PRODUCTS</h2>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {team.map((member, index) => {
          const isInCart = validateProductInCart(member.id);
          const handleClick = () => {
            handleAddOrRemoveProduct(member.id);
          };

          return (
            <div key={index} className='flex flex-col items-center'>
              <img
                src={member.image}
                alt={member.name}
                className='w-48 h-48 object-cover rounded-full shadow-lg mb-4'
              />
              <h3 className='text-xl font-semibold'>
                {member.name.toUpperCase()}
              </h3>
              <p className='text-gray-700'>
                {member.description.slice(0, 140)}...
              </p>
              <hr className='w-16 border-t border-gray-300 my-4' />
              <p className='text-blue-700'>$ {member.price}</p>
              {/*button add to cart  */}

              <button
                onClick={handleClick}
                className={`mt-4 px-4 py-2 rounded-lg text-white ${
                  isInCart ? 'bg-red-500' : 'bg-blue-500'
                }`}
              >
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
