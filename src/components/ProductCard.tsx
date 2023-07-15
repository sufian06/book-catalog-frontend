import { Link } from "react-router-dom";
import { IProduct } from "../types/productTypes";
import { plceholderImage } from "./ui/placeholder";

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const { title, image, author, genre, publicationDate, _id } = product;
  return (
    <div className="">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="h-56">
          {image ? (
            <img src={image} alt={title} />
          ) : (
            <img src={plceholderImage} alt="This is placeholder image" />
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between">
            <h3>
              <span className="font-bold">Author: </span>
              <span className="font-semibold">{author}</span>
            </h3>
            <h4>
              <span className="font-bold">Genre: </span>
              <span className="font-semibold">{genre}</span>
            </h4>
          </div>
          <p className="pb-4">Publish Date: {publicationDate}</p>
          <Link
            to={`/books/${_id}`}
            className="text-white border bg-green-500 bordered-2 rounded p-1 text-lg font-semibold"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}
