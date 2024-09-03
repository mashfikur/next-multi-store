"use client";

import { ProductCard, TProduct } from "@/components/Product/ProductCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import getAllProducts from "./lib/getAllProducts";
import getSearchProducts from "./lib/getSearchProducts";
import { setDisplayProd } from "@/redux/features/product/productSlice";

const ProductClient = ({
  initialProducts,
}: {
  initialProducts: TProduct[];
}) => {
  const productLimit = useAppSelector((state) => state.products.limit);
  const searchText = useAppSelector((state) => state.products.searchText);
  const productSkip = useAppSelector((state) => state.products.skip);
  const finalShowProducts = useAppSelector(
    (state) => state.products.displayProducts,
  );

  const dispatch = useAppDispatch();

  // setting the products to global state
  useEffect(() => {
    dispatch(setDisplayProd(initialProducts));
  }, [initialProducts, dispatch]);

  // secondary option to store products in local state
  const [displayProduct, setDisplayProduct] = useState(initialProducts);

  useEffect(() => {
    const fetchNewProduct = async () => {
      if (!searchText) {
        const data = await getAllProducts(productLimit, productSkip);

        setDisplayProduct(data.products);
        dispatch(setDisplayProd(data.products));
      } else {
        const data = await getSearchProducts(
          searchText,
          productLimit,
          productSkip,
        );

        setDisplayProduct(data.products);
        dispatch(setDisplayProd(data.products));
      }
    };

    fetchNewProduct();
  }, [productLimit, productSkip, searchText, dispatch]);

  console.log(finalShowProducts);

  return (
    <div className="my-4 grid grid-cols-4 gap-5">
      {finalShowProducts &&
        finalShowProducts.map((item: TProduct, index: number) => (
          <ProductCard product={item} key={index} />
        ))}
    </div>
  );
};

export default ProductClient;
