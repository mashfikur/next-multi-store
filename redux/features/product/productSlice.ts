import { TProduct } from "@/components/Product/ProductCard";
import { createSlice } from "@reduxjs/toolkit";

type TIntialState = {
  limit: number;
  skip: number;
  cart?: string[];
  searchText?: string;
  displayProducts?: TProduct[];
};

const initialState: TIntialState = {
  limit: 0,
  skip: 0,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLimit: (state, action) => {
      return {
        ...state,
        limit: action.payload,
      };
    },
    setSkip: (state, action) => {
      return {
        ...state,
        skip: action.payload,
      };
    },
    setSearchText: (state, action) => {
      return {
        ...state,
        searchText: action.payload,
      };
    },
    setDisplayProd: (state, action) => {
      return {
        ...state,
        displayProducts: action.payload,
      };
    },
  },
});

export const { setLimit, setSkip, setSearchText, setDisplayProd } =
  productSlice.actions;

export default productSlice.reducer;
