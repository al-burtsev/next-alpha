'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '@/src/stores/product-store';
import { ProductDetailsClientProps } from '@/src/interfaces'


const ProductDetailsClient = ({ productId }: ProductDetailsClientProps) => {
  const { products } = useStore();
  const numericId = Number(productId);
  const character = products.find(p => p.id === numericId);
  const infoList = ['name', 'status', 'species', 'gender']

  if (character) {
    const entries = Object.entries(character).filter(([key, value]) => typeof value === 'string' && infoList.includes(key));

    return (
      <section>
        <Link href={'/products'} className='inline-block p-10 text-xl'> ← Back to characters</Link>
        <div className='container mx-auto py-10'>
          <h1 className='text-4xl mb-10'>Character details
          </h1>
          <Image src={character.image} alt={character.name} width={400} height={400}></Image>

          <ul className='text-xl pt-3'>
            {entries.map(([key, value]) => <li key={crypto.randomUUID()}>{key}: {value}</li>)}
          </ul>
        </div>

      </section>
    )
  }

  return (
    <section className='p-10'>
      <Link href={'/products'} className='inline-block text-xl mb-4'> ← Back to characters</Link>
      <h1 className='text-4xl'>Character with ID: {productId} not found</h1>
    </section>
  );

}

export default ProductDetailsClient