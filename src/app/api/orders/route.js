// import db from "@/utils/db";
// import Order from "@/models/orderModel";

// import { NextResponse } from "next/server";

// export async function POST(req) {
//   await db.connect();

//   try {
//     const { orderItems, totalPrice } = await req.json();
//     const newOrder = new Order({
//       orderItems,
//       totalPrice,
//     });
//     const savedOrder = await newOrder.save();

//     return NextResponse.json({
//       success: true,
//       message: "Save order successful",
//       savedOrder,
//     });
//   } catch (error) {
//     console.error("Error in save order (server) => ", error);
//     return NextResponse.json({
//       success: false,
//       message: "Something went wrong. Please retry later!",
//     });
//   } finally {
//     await db.disconnect();
//   }
// }
