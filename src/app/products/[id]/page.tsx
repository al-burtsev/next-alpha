import ProductDetailsClient from './ProductDetailsClient';

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return <ProductDetailsClient productId={id} />;
}

export default ProductPage