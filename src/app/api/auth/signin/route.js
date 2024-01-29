
import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();
export async function POST(req) {
  try {

    const { first_name, last_name, mobile, password ,address} = await req.json();
    const role = "marketer";
    const isActive = true;
    if (!first_name || !last_name|| !password || !mobile ||!address) {
      return NextResponse.json({
        success: false,
        message: "Invalid input. Please provide phoneNumber, password, and name.",
      });
    }

    // const existingUser = await User.findOne({ phoneNumber });

    // if (existingUser) {
    //   return NextResponse.json({
    //     success: false,
    //     message: "User Already Exists",
    //   });
    // }

    const hashedPassword = await hash(password, 12);

    const newUser = await prisma.users.create({
      data: {

      first_name,
      last_name,
      mobile: parseInt(mobile),
      password: hashedPassword,
      role,
      isActive,
      address
    },

    });

    if (newUser) {
      return NextResponse.json({
        success: true,
        message: "Account created successfully",
      });
    }
  } catch (error) {
    console.error("Error in register (server):", error.message);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong. Please Retry Later!",
    });
  } finally {
    await prisma.$disconnect();
}
}
