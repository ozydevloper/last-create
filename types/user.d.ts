import { Agenda, Preferensi, User } from "@/lib/generated/prisma/client";

interface UserType extends User {
  preferensiId?: Preferensi;
  agendaId?: Agenda[];
}
