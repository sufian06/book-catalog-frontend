import { IProduct } from '@/types/globalTypes';
import { Link } from 'react-router-dom';

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  return (
    <div>
      <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/book-details/${product._id}`} className="w-full">
          <img src={product?.image} alt="product" />
          <h1 className="text-xl font-semibold">{product?.title}</h1>
        </Link>
        <p>Author: {product?.author}</p>
        <p className="text-sm">Genre: {product.genre}</p>
        <p className="text-sm">Published: {product?.publicationDate}</p>
      </div>
    </div>
  );
}
