import { prisma } from "@/lib/prisma";

export const getAllAgenda = async () => {
  return await prisma.agenda.findMany();
};
