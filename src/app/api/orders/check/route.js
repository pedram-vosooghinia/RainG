// import db from "@/utils/db";
// import ProductModel from "@/models/productModel";
// import { NextResponse } from "next/server";

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const slugs = searchParams.get("slugs")?.split(",");

//   await db.connect();

//   try {
//     const products = await ProductModel.find({ slug: { $in: slugs } })
//       .select({ slug: 1, inventory: 1, _id: 0 })
//       .lean();

//     if (products && products.length > 0) {
//       return NextResponse.json({ success: true, data: products });
//     } else {
//       return NextResponse.json({
//         status: 204,
//         success: false,
//         message: "No products found for the specified slugs.",
//       });
//     }
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return NextResponse.json({
//       status: 500,
//       success: false,
//       message: "Something went wrong. Please try again!",
//     });
//   } finally {
//     await db.disconnect();
//   }
// }
