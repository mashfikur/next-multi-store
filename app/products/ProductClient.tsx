"use client";

import { ProductCard, TProduct } from "@/components/Product/ProductCard";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import getAllProducts from "./lib/getAllProducts";

const ProductClient = ({
  initialProducts,
}: {
  initialProducts: TProduct[];
}) => {
  const productLimit = useAppSelector((state) => state.products.limit);

  const [displayProduct, setDisplayProduct] = useState(initialProducts);

  useEffect(() => {
    const fetchNewProduct = async () => {
      const data = await getAllProducts(productLimit);

      setDisplayProduct(data.products);
    };

    fetchNewProduct();
  }, [productLimit]);

  return (
    <div className="my-4 grid grid-cols-4 gap-5">
      {displayProduct &&
        displayProduct.map((item: TProduct, index: number) => (
          <ProductCard product={item} key={index} />
        ))}
    </div>
  );
};

export default ProductClient;
