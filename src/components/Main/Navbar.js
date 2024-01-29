"use client";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import useShoppingStore from "@/store/shoppingStore";
import { useState, useEffect } from "react";

const Navbar = () => {
  // const { cart } = useShoppingStore();
  const [cartItemsCount, setCartItemsCount] = useState(0);
  // useEffect(() => {
  //   if (cart && cart.cartItems) {
  //     setCartItemsCount(
  //       cart.cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
  //     );
  //   }
  // }, [cart]);

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
      title: "حساب کاربری",
      linkTitle: "/login",
      icon: <CgProfile size={24} />,
    },
  ];
  return (
    <nav className="flex items-center justify-between   bg-pedram-13 p-4 fixed top-0 w-full z-10">
        <div className="  w-1/5 text-pedram-1  text-4xl font-bold">
          <Link href="/">Rain.G</Link>
        </div>
      <div className="flex items-center mx-4">
        {lists.map((item) => (
          <Link key={item.title} href={item.linkTitle}>
            <div className="flex mx-4 items-center text-gray-700 text-l relative group">
              <span className="mx-2">{item.icon}</span>
              <span className="mx-2 pb-2">{item.title}</span>
              <div className="absolute  inset-x-0 bottom-0 h-0.5 bg-pedram-2 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
