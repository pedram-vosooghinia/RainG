"use server"
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 rtl bg-pedram-1">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.productName}
          className="w-full h-64 object-cover"
          width={500}
          height={500}
        />
      </Link>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-pedram-4">
          {product.productName}
        </div>
      </div>

      <Link href={`/product/${product.slug}`}>
        <button className="flex  mx-auto rounded-md bg-pedram-3 text-pedram-2 text-xm m-2 p-3">
          مشاهده بیشتر
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
