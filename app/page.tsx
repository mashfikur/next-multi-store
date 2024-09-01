import Image from "next/image";
import Link from "next/link";

import shadBanner from "@/public/images/shadcn-banner.png";

export default function Home() {
  return (
    <section className="px-4 py-6">
      <h3>Hello this is a next app , it is</h3>

      <ul className="flex items-center my-5">
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
      </ul>

      {/* image area */}
      <Image
        src={shadBanner}
        alt="shadcn-banner"
        quality={100}
        placeholder="blur"
      />
    </section>
  );
}
