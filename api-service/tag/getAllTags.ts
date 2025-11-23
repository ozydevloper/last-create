import { prisma } from "@/lib/prisma";

export const getAllTags = async (tag: string) => {
  if (tag === "kategori") {
    return await prisma.kategori.findMany({
      include: {
        agenda: true,
        preferensis: true,
      },
    });
  } else if (tag === "topik") {
    return await prisma.topik.findMany({
      include: {
        agenda: true,
        preferensis: true,
      },
    });
  } else if (tag === "biaya") {
    return await prisma.biaya.findMany({
      include: {
        agenda: true,
        preferensis: true,
      },
    });
  } else if (tag === "kalangan") {
    return await prisma.kalangan.findMany({
      include: {
        agenda: true,
        preferensis: true,
      },
    });
  } else if (tag === "kota") {
    return await prisma.kota.findMany({
      include: {
        agenda: true,
        preferensis: true,
      },
    });
  }
};
