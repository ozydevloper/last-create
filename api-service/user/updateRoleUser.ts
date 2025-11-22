import { prisma } from "@/lib/prisma";

export const updateUserId = async (id: string, role: string) => {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      role: role,
    },
  });
};
