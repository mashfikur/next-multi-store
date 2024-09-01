import * as React from "react";

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

export type TProduct = {
  title: string;
  images: string[];
  description: string;
};

export function ProductCard({ product }: { product: TProduct }) {
  return (
    <Card className="flex w-full flex-col">
      <CardContent className="flex-grow">
        <div className="h-[300px] w-full">
          <Image
            src={product.images[0]}
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
        <Button>Buy Now</Button>
        <Button variant="outline">Show Details</Button>
      </CardFooter>
    </Card>
  );
}
