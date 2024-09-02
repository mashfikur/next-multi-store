import { createSlice } from "@reduxjs/toolkit";

type TIntialState = {
  limit: number;
  skip: number;
  cart?: string[];
};

const initialState: TIntialState = {
  limit: 10,
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
  },
});

export const { setLimit, setSkip } = productSlice.actions;

export default productSlice.reducer;
