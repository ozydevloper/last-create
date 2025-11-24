import { Agenda } from "@/lib/generated/prisma/client";

export interface AgendaType extends Agenda {
  userId: string;
}
