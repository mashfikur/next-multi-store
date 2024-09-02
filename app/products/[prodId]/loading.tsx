"use client";
import { Bars } from "react-loader-spinner";

const loading = () => {
  return (
    <section className="flex h-[60vh] w-full items-center justify-center">
      <Bars
        height="80"
        width="80"
        color="#7c3aed"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </section>
  );
};

export default loading;
