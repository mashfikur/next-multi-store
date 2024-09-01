const getAllProducts = async () => {
  const products = await fetch("https://dummyjson.com/products?limit=20").then(
    (res) => res.json()
  );

  return products;
};

export default getAllProducts;
