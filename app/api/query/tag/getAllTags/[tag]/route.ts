import { getAllTags } from "@/api-service/tag/getAllTags";
import { middlewareSignature } from "@/lib/hmac/signature";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, ctx : RouteContext<'/api/query/tag/getAllTags/[tag]'>) {
  try {
    if (!middlewareSignature(req.headers.get("nothing-to-see"))) {
      return NextResponse.json({ data: "Data salah validasi" });
    }

    const {tag} = await ctx.params

    const allTags = await getAllTags(tag.trim())

    if (allTags?.length === 0) return NextResponse.json({ data: "Data tidak ditemukan" });

    return NextResponse.json({ data: allTags });
  } catch (err) {
    return NextResponse.json({ data: JSON.stringify(err) });
  }
}
