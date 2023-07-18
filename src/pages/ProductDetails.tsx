import { useParams } from "react-router-dom";
import ProductReview from "../components/ProductReview";
import { useSingleBookQuery } from "../redux/features/productApi";
import Loading from "./Loading";

export default function ProductDetails() {
  const { id } = useParams();

  const { data, isLoading, error } = useSingleBookQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={data?.data?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{data?.data?.title}</h1>
          <div>
            <h2>
              Author:
              <span>{data?.data?.author}</span>
            </h2>
            <h2>
              Genre:
              <span>{data?.data?.genre}</span>
            </h2>
            <h2>
              Publish:
              <span>{data?.data?.publicationDate}</span>
            </h2>
          </div>
          {data?.data?.description && (
            <p>
              <span>Description: </span>
              {data?.data?.description}
            </p>
          )}
        </div>
      </div>
      <ProductReview id={id!} />
    </>
  );
}
