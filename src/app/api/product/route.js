
// import db from "@/utils/db";
// import ProductModel from "@/models/productModel";
// import { NextResponse } from "next/server";

// export  async function GET() {

//   await db.connect();

//   try {
//     const products = await ProductModel.find({});
//     if (products) {
//       return NextResponse.json({ success: true, data: products });
//     } else {
//       return NextResponse.json({ status: 204, success: false, message: 'No products found.' });
//     }
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return NextResponse.json({ status: 500, success: false, message: 'Something went wrong. Please try again!' });
//   } finally {
//     await db.disconnect();
//   }
// }


import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const query = prisma.products.findMany();

    const products = await query;
    if (products) {
      return NextResponse.json({ success: true, data: products });
    } else {
      return NextResponse.json({
        status: 204,
        success: false,
        message: "No products found.",
      });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Something went wrong. Please try again!",
    });
  } finally {
    await prisma.$disconnect();
  }
}
