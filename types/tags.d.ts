import {
  Biaya,
  Kalangan,
  Kategori,
  Kota,
  Topik,
} from "@/lib/generated/prisma/client";

export interface KategoriType extends Kategori {
  agenda?: Agenda[];

  preferensis?: Preferensi[];
}
export interface TopikType extends Topik {
  agenda?: Agenda[];

  preferensis?: Preferensi[];
}

export interface BiayaType extends Biaya {
  agenda?: Agenda[];
  preferensis?: Preferensi[];
}

export interface KalanganType extends Kalangan {
  agenda?: Agenda[];
  preferensis?: Preferensi[];
}

export interface KotaType extends Kota {
  agenda?: Agenda[];
  preferensis?: Preferensi[];
}
