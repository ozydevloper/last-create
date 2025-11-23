import { prisma } from "@/lib/prisma";

export const deleteTag = async (type: string, name: string) => {
  if (type === "kategori") {
    return prisma.kategori.delete({
      where: {
        name: name,
      },
      select: {
        name: true,
      },
    });
  } else if (type === "topik") {
    return prisma.topik.delete({
      where: {
        name: name,
      },
      select: {
        name: true,
      },
    });
  } else if (type === "biaya") {
    return prisma.biaya.delete({
      where: {
        name: name,
      },
      select: {
        name: true,
      },
    });
  } else if (type === "kalangan") {
    return prisma.kalangan.delete({
      where: {
        name: name,
      },
      select: {
        name: true,
      },
    });
  } else if (type === "kota") {
    return prisma.kota.delete({
      where: {
        name: name,
      },
      select: {
        name: true,
      },
    });
  }
};
