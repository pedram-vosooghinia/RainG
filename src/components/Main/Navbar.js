"use client";
import Link from "next/link";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { VscArchive } from "react-icons/vsc";


const Navbar = () => {

  const lists = [
    {
      title: "درباره ما",
      linkTitle: "",
      icon: <MdOutlinePeopleOutline size={24} />,
    },
    {
      title: "تماس با ما",
      linkTitle: "",
      icon: <BsTelephoneInbound size={24} />,
    },
    {
      title: "محصولات",
      linkTitle: "/login",
      icon: <VscArchive  size={24} />,
    },
  ];
  return (
    <nav className="hidden md:flex items-center justify-between   bg-pedram-4 p-4 fixed top-0 w-full z-10">
        <div className=" w-1/5 text-pedram-3  text-4xl font-bold">
          <Link href="/">Rain.G</Link>
        </div>
      <div className="flex items-center mx-4">
        {lists.map((item) => (
          <Link key={item.title} href={item.linkTitle}>
            <div className="flex mx-4 items-center text-gray-700 text-l relative group">
              <span className="mx-2">{item.icon}</span>
              <span className="mx-2 pb-2">{item.title}</span>
              <div className="absolute  inset-x-0 bottom-0 h-0.5 bg-pedram-3 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
