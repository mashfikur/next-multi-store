"use client";

import { ProductCard, TProduct } from "@/components/Product/ProductCard";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import getAllProducts from "./lib/getAllProducts";
import getSearchProducts from "./lib/getSearchProducts";

const ProductClient = ({
  initialProducts,
}: {
  initialProducts: TProduct[];
}) => {
  const productLimit = useAppSelector((state) => state.products.limit);
  const searchText = useAppSelector((state) => state.products.searchText);
  const productSkip = useAppSelector((state) => state.products.skip);

  const [displayProduct, setDisplayProduct] = useState(initialProducts);

  useEffect(() => {
    const fetchNewProduct = async () => {
      if (!searchText) {
        const data = await getAllProducts(productLimit, productSkip);

        setDisplayProduct(data.products);
      } else {
        const data = await getSearchProducts(
          searchText,
          productLimit,
          productSkip,
        );

        setDisplayProduct(data.products);
      }
    };

    fetchNewProduct();
  }, [productLimit, productSkip, searchText]);

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
