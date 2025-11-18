"use server";
import { prisma } from "@/lib/prisma";

export const getUserByEmail = async (emailUser: string | undefined) => {
  return await prisma.user.findUnique({
    where: {
      email: emailUser,
    },
  });
};
