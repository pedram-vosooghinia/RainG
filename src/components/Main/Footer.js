"use client";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
// import useShoppingStore from "@/store/shoppingStore";
import { useState, useEffect } from "react";

const Footer = () => {
  // const { cart } = useShoppingStore();

  const [cartItemsCount, setCartItemsCount] = useState(0);
  // useEffect(() => {
  //   if (cart && cart.cartItems) {
  //     setCartItemsCount(
  //       cart.cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
  //     );
  //   }
  // }, [cart]);
  const directionIcons = [
    {
      title: "حساب کاربری",
      linkTitle: "/login",
      icon: <CgProfile size={24} />,
    },

    {
      title: "تماس با ما",
      linkTitle: "",
      icon: <BsTelephoneInbound size={24} />,
    },

    {
      title: "درباره ما",
      linkTitle: "",
      icon: <MdOutlinePeopleOutline size={24} />,
    },
  ];
  const links = [
    {
      title: "مجموعه تتیسان",
      items: ["درباره ما", "تماس با ما", "قوانین و مقررات"],
    },
    {
      title: "راه های ارتباطی",
      items: ["instagram", "telegram", "whatsapp"],
    },
  ];

  return (
    <footer className="bg-pedram-4 relative w-full text-pedram-2 mt-10 md:mt-0">
      <div className="hidden md:inline-flex	justify-between items-center rtl w-full   ">
        {links.map((category) => (
          <div key={category.title} className="text-lg px-32 py-4 w-1/2">
            <div className="text-pedram-1 font-bold">{category.title}</div>
            <div>
              {category.items.map((item) => (
                <div key={item}>
                  <Link href={`/${item}`} className="hover:text-gray-400">
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center space-x-4 rtl p-4 justify-between  md:hidden ">
          {directionIcons.map((item) => (
            <Link key={item.title} href={item.linkTitle}>
              <div className="flex  flex-col items-center  font-bold text-xs  text-gray-700	 relative group">
                <div className="flex">
                  <div>{item.cartValue}</div>
                  <div className="flex items-center">{item.icon}</div>
                </div>
                <div className="my-1">{item.title}</div>
                <div className="absolute  inset-x-0 bottom-0 h-0.5 bg-pedram-2 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-pedram-5"></div>
      <div className=" flex justify-between items-center p-4 text-center text-pedram-1">
        <div className="text-pedram-1  text-4xl font-bold ">
          <Link href="/">TETISAN </Link>
        </div>
        <p>&copy; 2023 TETISAN</p>
      </div>
    </footer>
  );
};

export default Footer;
