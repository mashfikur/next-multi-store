import * as React from "react";
import { FaCartShopping } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export type TProduct = {
  title: string;
  images: string[];
  description: string;
  id: number;
  thumbnail:string
};

export function ProductCard({ product }: { product: TProduct }) {
  return (
    <Card className="flex w-full flex-col">
      <CardContent className="flex-grow">
        <div className="h-[300px] w-full">
          <Image
            src={product?.images[0]}
            alt={product.title}
            width={500}
            height={500}
            quality={100}
            className="h-full w-full object-contain"
          />
        </div>
      </CardContent>
      <CardHeader className="flex-grow">
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between">
        <Button className="flex items-center gap-2">
          {" "}
          <span className="text-lg">
            <FaCartShopping />{" "}
          </span>{" "}
          <span>Add to Cart</span>
        </Button>
        <Link href={`/products/${product.id}`}>
          <Button variant="outline">Show Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
