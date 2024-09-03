// "use client";
import getAllProducts from "./lib/getAllProducts";
import { ProductCard, TProduct } from "@/components/Product/ProductCard";
import ProductLimit from "@/components/Product/ProductLimit";
import { useAppSelector } from "@/redux/hooks";
import { useSelector } from "react-redux";
import ProductClient from "./ProductClient";

const page = async () => {
  const data = await getAllProducts();

  return (
    <section className="my-10">
      {/* products functionlaity area */}
      <div className="flex items-center justify-between">
        {/* search bar */}
        <div></div>

        {/* limit and sorting  */}
        <div>
          <ProductLimit />
        </div>
      </div>

      {/* Displaying Products */}
      <ProductClient initialProducts={data.products} />
    </section>
  );
};

export default page;
