// "use strict";
// import { create } from "zustand";
// import { toast } from 'react-toastify';
// import Cookies from "js-cookie";

// const useShoppingStore = create((set) => ({
//   cart: Cookies.get("cart")
//     ? JSON.parse(Cookies.get("cart"))
//     : { cartItems: [], shippingData: {}, paymentMethod: {} }, 
//   firstAddToCart: (newItem) => {
//     set((state) => {
//       const existingItem = state.cart?.cartItems?.find(
//         (item) => item.slug === newItem.slug
//       );

//       const cartItems = existingItem
//         ? (state.cart?.cartItems || []).map((item) =>
//             item.title === existingItem.title ? newItem : item
//           )
//         : [...(state.cart?.cartItems || []), newItem];

//       const updatedCart = { ...state.cart, cartItems };
//       Cookies.set("cart", JSON.stringify(updatedCart));

//       return { ...state, cart: updatedCart };
//     });
//   },

//   increaseValueCart: (newItem) =>
//     set((state) => {
//       const existingItem = state.cart.cartItems.find(
//         (item) => item.slug === newItem.slug
//       );

//       if (existingItem) {
//         if (
//           existingItem.quantity + 1 > newItem.inventory ||
//           existingItem.quantity + 1 > newItem.validationValue
//         ) {
//           toast.error("متاسفانه مقدار موجودی کافی نیست.");
//           return state;
//         }

//         toast.success("محصول به سبد خرید شما اضافه شد");
//         existingItem.quantity += 1;
//       } else {
//         if (newItem.quantity > newItem.inventory) {
//           toast.error("متاسفانه مقدار موجودی کافی نیست.");
//           return state;
//         }

//         const updatedCartItems = [...state.cart.cartItems, newItem];
//         const updatedCart = { ...state.cart, cartItems: updatedCartItems };

//         toast.success("محصول به سبد خرید شما اضافه شد");
//         Cookies.set("cart", JSON.stringify(updatedCart));

//         return { cart: updatedCart };
//       }

//       const updatedCart = { ...state.cart };
//       Cookies.set("cart", JSON.stringify(updatedCart));

//       return { cart: updatedCart };
//     }),

//   decreaseValueCart: (item) =>
//     set((state) => {
//       const existingItem = state.cart.cartItems.find(
//         (cartItem) => cartItem.slug === item.slug
//       );

//       if (existingItem) {
//         if (existingItem.quantity - 1 >= 1) {
//           toast.success("محصول از سبد خرید شما کم شد");
//           existingItem.quantity -= 1;
//         } else {
//           existingItem.quantity = 1;
//         }
//       }

//       const updatedCart = { ...state.cart };
//       Cookies.set("cart", JSON.stringify(updatedCart));

//       return { cart: updatedCart };
//     }),

//   deleteValueCart: (item) =>
//     set((state) => {
//       const updatedCartItems = state.cart.cartItems.filter(
//         (cartItem) => cartItem.slug !== item.slug
//       );

//       const updatedCart = { ...state.cart, cartItems: updatedCartItems };

//       toast.success("محصول از سبد خرید شما حذف شد");
//       Cookies.set("cart", JSON.stringify(updatedCart));

//       return { cart: updatedCart };
//     }),

//   saveShippingData: (data) =>
//     set((state) => ({
//       cart: {
//         ...state.cart,
//         shippingData: {
//           ...state.cart.shippingData,
//           ...data,
//         },
//       },
//     })),
// }));

// export default useShoppingStore;
