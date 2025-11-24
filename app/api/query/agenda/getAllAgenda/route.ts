import { getAllAgenda } from "@/api-service/agenda/getAllAgenda";
import { NextResponse } from "next/server";

export async function GET() {
  const allAgenda = await getAllAgenda();

  if (allAgenda.length === 0)
    return NextResponse.json({
      data: "Data tidak ditemukan",
    });
  return NextResponse.json({
    data: allAgenda,
  });
}
