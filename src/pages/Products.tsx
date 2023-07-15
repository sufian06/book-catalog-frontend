/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ProductCard from "../components/ProductCard";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import { IProduct } from "../types/productTypes";

export default function Products() {
  const { data, isLoading, error } = useGetBooksQuery(undefined);

  return (
    <div className="mt-4 flex">
      {data?.data?.map((product: IProduct) => (
        <ProductCard key={product.title} product={product} />
      ))}
    </div>
  );
}
