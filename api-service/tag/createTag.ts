import { prisma } from "@/lib/prisma";

export const createTag = async (type: string, newName: string) => {
  if (type === "kategori") {
    return await prisma.kategori.create({
      data: {
        name: newName,
      },
      select: {
        name: true,
      },
    });
  } else if (type === "topik") {
    return await prisma.topik.create({
      data: {
        name: newName,
      },
      select: {
        name: true,
      },
    });
  } else if (type === "biaya") {
    return await prisma.biaya.create({
      data: {
        name: newName,
      },
      select: {
        name: true,
      },
    });
  } else if (type === "kalangan") {
    return await prisma.kalangan.create({
      data: {
        name: newName,
      },
      select: {
        name: true,
      },
    });
  } else if (type === "kota") {
    return await prisma.kota.create({
      data: {
        name: newName,
      },
      select: {
        name: true,
      },
    });
  }
};
