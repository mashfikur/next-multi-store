const getSearchProducts = async (
  searchText?: string,
  limit?: number,
  skip?: number,
) => {
  const data = await fetch(
    `https://dummyjson.com/products/search?q=${searchText}&limit=${limit}&skip=${skip}`,
  ).then((res) => res.json());

  return data;
};

export default getSearchProducts;
