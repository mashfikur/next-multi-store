"use client";
import { Input } from "@/components/ui/input";
import { setSearchText } from "@/redux/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";
import { GoSearch } from "react-icons/go";
const ProductSearch = () => {
  const dispatch = useAppDispatch();

  const searchText = useAppSelector((state) => state.products.searchText);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      dispatch(setSearchText(event.target.value));
    }, 1000);
  };

  return (
    <div className="relative flex w-[28%] items-center">
      <span className="absolute left-2.5 top-[54%] -translate-y-1/2 text-lg text-textGray">
        <GoSearch />
      </span>
      <Input
        onChange={handleChange}
        type="text"
        placeholder="Search product ..."
        className="w-full rounded-full py-5 pl-10 focus-visible:ring-0"
        defaultValue={searchText}
      />
    </div>
  );
};

export default ProductSearch;
