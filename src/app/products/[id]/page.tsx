import { Character } from '@/src/interfaces';
import ProductDetailsClient from './ProductDetailsClient';

export async function generateStaticParams() {
  const state = localStorage.getItem('product-storage');

  if (state) {
    const { products } = JSON.parse(state)

    return products.map((product : Character) => ({
      id: product.id.toString(),
    }));
  }
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return <ProductDetailsClient productId={id} />;
}

export default ProductPage