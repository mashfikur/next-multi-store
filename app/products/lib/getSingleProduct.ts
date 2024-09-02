const getSingleProduct = async (productId: number) => {
  const data = await fetch(`https://dummyjson.com/products/${productId}`).then(
    (res) => res.json(),
  );

  return data;
};

export default getSingleProduct;
