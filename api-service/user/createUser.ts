import { User } from "@/lib/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export const createUser = async (
  user: Pick<User, "id" | "name" | "email" | "image">,
) => {
  return await prisma.user.create({
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
    },
    select: {
      name: true,
      email: true,
      image: true,
      role: true,
    },
  });
};
