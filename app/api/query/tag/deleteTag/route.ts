import { deleteTag } from "@/api-service/tag/deleteTag";
import { middlewareSignature } from "@/lib/hmac/signature";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    if (!middlewareSignature(req.headers.get("nothing-to-see"))) {
      return NextResponse.json({ data: "Data salah validasi" });
    }

    const { type, name } = await req.json();

    const tagDeleted: { name: string } | undefined = await deleteTag(
      type,
      name
    );

    if (tagDeleted === undefined)
      return NextResponse.json({
        data: `Gagal menghapus, ${tagDeleted}`,
      });

    return NextResponse.json({
      data: `Berhasil menghapus, ${tagDeleted.name}`,
    });
  } catch (err) {
    return NextResponse.json({ data: JSON.stringify(err) });
  }
}
