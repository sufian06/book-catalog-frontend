/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ProductReview from '@/components/ProductReview';
import { useSingleProductQuery } from '@/redux/features/products/productApi';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

export default function ProductDetails() {
  const { id } = useParams();

  const { data: product, isLoading, error } = useSingleProductQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%] mr-2">
          <img src={product?.data?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3 ml-2">
          <h1 className="text-3xl font-semibold">
            Title: {product?.data?.title}
          </h1>
          <p className="text-xl">Author: {product?.data?.author}</p>
          <p className="text-xl">Genre: {product?.data?.genre}</p>
          <p className="text-xl">
            Publish Date: {product?.data?.publicationDate}
          </p>
        </div>
      </div>
      <ProductReview id={id!} />
    </>
  );
}
