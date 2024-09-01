import { notFound } from "next/navigation";

type TParamType = {
  params: {
    prodId: string;
  };
};

const page = ({ params }: TParamType) => {
  // in case if a single product is not available
  if (params.prodId === "asdas") {
    notFound();
  }

  return (
    <div>
      <h3> This is a single product page number - {params.prodId} </h3>
    </div>
  );
};

export default page;
