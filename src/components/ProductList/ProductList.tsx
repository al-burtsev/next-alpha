'use client'
import { useState, useEffect } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import Link from 'next/link'
import { useStore } from '@/src/stores/product-store'

const ProductList = () => {
  const { products, fetchData, favorites } = useStore();
  const [filter, setFilter] = useState<'all' | 'liked'>('all');
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));
  const isShownAll = filter === 'all';
  const filteredProducts = isShownAll ? products : favoriteProducts;

  useEffect(() => {
    fetchData('https://rickandmortyapi.com/api/character')
  }, [])

  return (
    <>
      <div className='flex gap-8 mb-8 text-xl'>
        <button className={`cursor-pointer ${isShownAll ? 'text-red-600' : ''}`}
          onClick={() => setFilter('all')}>Все</button>
        <button className={`cursor-pointer ${!isShownAll ? 'text-red-600' : ''}`}
          onClick={() => setFilter('liked')}>Избранное</button>
      </div>
      <ul className='grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8'>
        {filteredProducts.map((character) => <Link key={character.id} href={`products/${character.id}`}><ProductItem character={character} /></Link>)}
      </ul>
    </>
  )
}

export default ProductList