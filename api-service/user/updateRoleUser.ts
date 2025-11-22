import { prisma } from "@/lib/prisma";

export const updateUserRole = async (id: string, role: string) => {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      role: role,
    },
    select: {
      email: true,
    },
  });
};
