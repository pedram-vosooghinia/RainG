// import db from "@/utils/db";
// import ProductModel from "@/models/productModel";
// import { NextResponse } from "next/server";

// export  async function GET(request, { params }) {
//     const { slug } = params;

//   await db.connect();

//   try {
//     const product = await ProductModel.findOne({ slug }, { _id: 0 }).lean();
//     if (product) {
//       return NextResponse.json({ success: true, data: product });
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