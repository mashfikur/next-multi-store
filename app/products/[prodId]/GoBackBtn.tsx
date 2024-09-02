"use client";

import { useRouter } from "next/navigation";
import { IoReturnUpBack } from "react-icons/io5";

const GoBackBtn = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="absolute left-0 top-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border text-2xl"
    >
      <IoReturnUpBack />
    </div>
  );
};

export default GoBackBtn;
