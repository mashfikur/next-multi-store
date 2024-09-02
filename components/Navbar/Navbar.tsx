"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const navLinks = [
    {
      pathName: "Home",
      url: "/",
    },
    {
      pathName: "Products",
      url: "/products",
    },
  ];

  return (
    <header>
      {/* content wrapper */}
      <div className="container my-6 flex items-center justify-between rounded-full border px-6 py-5 shadow-sm">
        {/* logo */}
        <div className="text-4xl font-semibold">
          Next<span className="text-violet-500">Store</span>
        </div>

        {/* links */}
        <ul className="flex items-center gap-5">
          {navLinks.map((item, index) => (
            <li
              className={`rounded-xl px-3 py-2 font-semibold ${path === item.url ? `bg-violet-600 text-white` : ``} `}
              key={index}
            >
              {" "}
              <Link href={item.url}>{item.pathName}</Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
