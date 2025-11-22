import { prisma } from "@/lib/prisma";

export const deleteUserById = async (id: string) => {
  return await prisma.user.delete({
    where: {
      id: id,
    },
    select: {
      email: true,
    },
  });
};
