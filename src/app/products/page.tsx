import ProductList from '@/src/components/ProductList/ProductList'
import Link from 'next/link';

const Products = () => {
  return (
    <section className='container mx-auto py-10'>
      <Link href={'/'} className='inline-block py-10 text-xl'> ← Back to homepage</Link>

      <ProductList/>
    </section>
  )
}

export default Products