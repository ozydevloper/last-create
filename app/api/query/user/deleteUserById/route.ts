import { deleteUserById } from "@/api-service/user/deleteUserById";
import { middlewareSignature } from "@/lib/hmac/signature";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    if (!middlewareSignature(req.headers.get("nothing-to-see"))) {
      return NextResponse.json({ data: "Request ga bener" });
    }
    const { id } = await req.json();

    console.log(id);
    const { email } = await deleteUserById(id);
    return NextResponse.json({ data: `Berhasil menghapus, ${email}` });
  } catch (err) {
    return NextResponse.json({ data: JSON.stringify(err) });
  }
}
