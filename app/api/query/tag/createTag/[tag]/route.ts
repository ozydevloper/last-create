import { createTag } from "@/api-service/tag/createTag";
import { middlewareSignature } from "@/lib/hmac/signature";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    if (!middlewareSignature(req.headers.get("nothing-to-see"))) {
      return NextResponse.json({ data: "Data salah validasi" });
    }

    const { type, newName } = await req.json();

    const newTag: { name: string } | undefined = await createTag(type, newName);

    if (newTag === undefined)
      return NextResponse.json({
        data: `Gagal membuat, ${newTag}`,
      });

    return NextResponse.json({
      data: `Berhasil membuat, ${JSON.stringify(newTag?.name)}`,
    });
  } catch (err) {
    return NextResponse.json({ data: JSON.stringify(err) });
  }
}
