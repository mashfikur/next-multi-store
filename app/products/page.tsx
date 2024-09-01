import Image from "next/image";
import getAllProducts from "./lib/getAllProducts";
import { ProductCard, TProduct } from "@/components/Product/ProductCard";

const page = async () => {
  const products = await getAllProducts();

  console.log(products);

  return (
    <section className="my-10">
      <div className="my-5 grid grid-cols-4 gap-4 gap-y-8">
        {products.products.map((item: TProduct, index: number) => (
          <ProductCard product={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default page;
