const getAllProducts = async (limit: number = 10, skip: number = 0) => {
  const products = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  ).then((res) => res.json());

  return products;
};

export default getAllProducts;
