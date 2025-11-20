import { verifySignature } from "@/lib/hmac/signature";
import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  if (!verifySignature(req.headers.get("nothing-to-see")!)) {
  }

  return NextResponse.json({ message: "YOUR PELASESURE" });
};
