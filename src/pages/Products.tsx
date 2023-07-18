/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ProductCard from "../components/ProductCard";
import { useGetBooksQuery } from "../redux/features/productApi";
import { IProduct } from "../types/productTypes";

export default function Products() {
  const { data, isLoading, error } = useGetBooksQuery(undefined);

  // console.log(data.data);

  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {data?.data?.map((product: IProduct) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
