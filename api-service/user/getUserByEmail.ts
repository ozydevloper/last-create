"use server";
import { prisma } from "@/lib/prisma";

export const getUserByEmail = async (emailUser: string | undefined) => {
  return await prisma.user.findUnique({
    where: {
      email: emailUser,
    },
    select: {
      email: true,
      image: true,
      name: true,
      role: true,
    },
  });
};
