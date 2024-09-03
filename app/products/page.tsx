import getAllProducts from "./lib/getAllProducts";
import ProductLimit from "@/components/Product/ProductLimit";
import ProductClient from "./ProductClient";
import ProductSearch from "@/components/Product/ProductSearch";

const page = async () => {
  const data = await getAllProducts();

  return (
    <section className="my-10">
      {/* products functionlaity area */}
      <div className="flex items-center justify-between">
        {/* search bar */}
        <ProductSearch />

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
