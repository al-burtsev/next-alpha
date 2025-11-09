import { getData } from '@/src/api/api';
import ProductDetailsClient from './ProductDetailsClient';
import { Character } from '@/src/interfaces';

export async function generateStaticParams() {
  const products = await getData('https://rickandmortyapi.com/api/character');
  return products.map((product: Character) => ({
    id: product.id.toString(),
  }));
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return <ProductDetailsClient productId={id} />;
}

export default ProductPage