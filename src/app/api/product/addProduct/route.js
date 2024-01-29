// import db from "@/utils/db";
// import { NextResponse } from "next/server";
// import ProductModel from "@/models/productModel";
// export async function POST(req) {
//     await db.connect();
//     try {
//   const value = await req.json();
//   console.log("value", value);
//   const newProductItems = {
//     productName: value.productName,
//     price: value.price,
//     inventory: value.inventory,
//     barcode: value.barcode,
//     numberInPack: value.numberInPack,
//     coloring: value.coloring,
//     size: value.size,
//     image: `/images/${value.image}`,
//     category: value.category,
//     season: value.season,
//     description: value.description,
//     slug: `${value.category}_${value.barcode}`,
//     validationValue: value.validationValue,
//   };

// console.log("newProductItems",newProductItems)

//     const newProduct = new ProductModel(newProductItems);
//       const savedProduct = await newProduct.save();

//       return NextResponse.json({
//         success: true,
//         message: "Save product successful",
//         savedProduct,
//       });
//     } catch (error) {
//       console.error("Error in save product (server) => ", error);
//       return NextResponse.json({
//         success: false,
//         message: "Something went wrong. Please retry later!",
//       });
//     } finally {
//       await db.disconnect();
//     }
// }
