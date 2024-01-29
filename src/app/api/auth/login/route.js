import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const validateInput = (mobile, password) => {
  if (!mobile || !password) {
    return { error: "Invalid input. Please provide mobile and password." };
  }
  return {};
};

export async function POST(req) {
  const { mobile, password } = await req.json();
  const { error } = validateInput(mobile, password);

  if (error) {
    return NextResponse.json({ success: false, message: error });
  }

  try {
    const user = await prisma.users.findFirst({
      where: {
        mobile: parseInt(mobile),
      },
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Account not Found",
      });
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({
        success: false,
        message: "Incorrect Password",
      });
    }

    const token = jwt.sign(
      { role: user.role, isActive: user.isActive, name: user.name },
      process.env.AUTH_SECRET,
      { expiresIn: "1h" }
    );
    const check2 = user.isActive;
    console.log("user", user);
    const response = {
      token,
      role:user.role,
      isActive: user.isActive,
      first_name: user.first_name
    }
    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("Authentication error:", error.message);
    return NextResponse.json({
      success: false,
      message: "Invalid credentials",
    });
  } finally {
    await prisma.$disconnect();
  }
}
