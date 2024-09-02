import { IoReturnUpBack } from "react-icons/io5";
import getSingleProduct from "../lib/getSingleProduct";
import Image from "next/image";
import GoBackBtn from "./GoBackBtn";

type TParamType = {
  params: {
    prodId: number;
  };
};

const CommonTitle = ({ children }: { children: string }) => {
  return <p className="pb-4 text-lg font-bold"> {children} </p>;
};

const ProdInfo = ({
  value,
  children,
}: {
  value: string | number;
  children: string;
}) => {
  return (
    <p className="text-base font-medium">
      {" "}
      {children} :{" "}
      <span className="text-textGray font-semibold"> {value || "N/A"} </span>{" "}
    </p>
  );
};

const page = async ({ params }: TParamType) => {
  // in case if a single product is not available
  // if (params.prodId === "asdas") {
  //   notFound();
  // }

  // getting single Product data
  const productData = await getSingleProduct(params.prodId);

  return (
    <section className="my-8">
      {/* content area */}
      <div className="flex items-start gap-5">
        {/* image area */}
        <div className="relative h-[650px] flex-1">
          <Image
            src={productData.images[0]}
            width={600}
            height={600}
            alt={productData.title}
            quality={100}
            className="h-full w-full object-contain"
          />

          {/* go back icon */}
          <GoBackBtn />
        </div>
        {/* Info area */}
        <div className="flex-1">
          {/* top area */}
          <div className="border-b">
            <div className="w-[80%] space-y-8 pb-4">
              <p className="text-4xl font-semibold leading-[44px]">
                {" "}
                {productData.title}{" "}
              </p>
              <p className="text-primaryColor text-2xl font-semibold">
                {" "}
                ${productData.price}{" "}
              </p>
            </div>
          </div>
          {/* bottom area */}
          <div className="my-4 space-y-6">
            {/* Descrtipon */}
            <div>
              <CommonTitle>Description</CommonTitle>

              <div className="text-base text-gray-500">
                {productData.description}
              </div>
            </div>
            {/* information */}
            <div>
              <CommonTitle>Product Information</CommonTitle>
              <div className="space-y-2">
                <ProdInfo value={productData.brand}>Brand</ProdInfo>
                <ProdInfo value={productData.stock}>Stock</ProdInfo>
                <ProdInfo value={productData.warrantyInformation}>
                  Warranty
                </ProdInfo>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
