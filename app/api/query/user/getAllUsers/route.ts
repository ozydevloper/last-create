import { middlewareSignature } from "@/lib/hmac/signature";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    if (!middlewareSignature(req.headers.get("nothing-to-see"))) {
      return NextResponse.json({ data: "Data salah validasi" });
    }
    const allUser = await prisma.user.findMany({
      include: {
        preferensiId: true,
        agendaId: true,
      },
    });
    if (allUser.length === 0)
      return NextResponse.json({ data: "Data tidak ditemukan" });
    return NextResponse.json({ data: allUser });
  } catch (err) {
    return NextResponse.json({ data: err });
  }
}
