import { middlewareSignature } from "@/lib/hmac/signature";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    if (!middlewareSignature(req.headers.get("nothing-to-see"))) {
      return NextResponse.json({ data: "Data salah validasi" });
    }
    console.log("masuk");
  } catch (err) {
    return NextResponse.json({ data: err });
  }
}
