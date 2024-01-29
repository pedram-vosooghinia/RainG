import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req){
  console.log("req",req)

  const data = await req.formData();
  console.log("data",data)
  const file = data.get("file");
  console.log("file",file)

  if (!file) {
    return NextResponse.json({ "message": "no image found", seccess: false });
  }

  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `./public/images/${file.name}`;
  await writeFile(path, buffer);
  return NextResponse.json({ "message": "file uploaded", success: true });
}
