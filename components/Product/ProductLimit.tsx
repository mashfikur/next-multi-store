"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setLimit } from "@/redux/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const ProductLimit = () => {
  const limit = useAppSelector((state) => state.products.limit);

  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    dispatch(setLimit(parseInt(value)));
  };

  const selectValues = [5, 10, 20, 30];

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Products Per Page" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {selectValues.map((item: number, index: number) => (
            <SelectItem key={index} value={item.toString()}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ProductLimit;
