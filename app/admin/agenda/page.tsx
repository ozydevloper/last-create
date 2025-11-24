"use client";
import Loading from "@/app/loading";
import { Badge } from "@/components/myui/badge";
import { CardParent } from "@/components/myui/card";
import { apiFetch } from "@/lib/hmac/signature";
import { AgendaType } from "@/types/agenda";
import { useQuery } from "@tanstack/react-query";
import { EllipsisVertical, Plus } from "lucide-react";
import { redirect } from "next/navigation";

export default function Page() {
  const allAgenda = useQuery<{ data: AgendaType[] | string }>({
    queryKey: ["agenda"],
    queryFn: () => {
      return apiFetch("/api/query/agenda/getAllAgenda").then((res) =>
        res.json()
      );
    },
  });

  if (allAgenda.isLoading) return <Loading />;

  if (allAgenda.error)
    return <div>Terjadi error : {JSON.stringify(allAgenda.error)}</div>;

  if (!Array.isArray(allAgenda.data?.data))
    return <div>{allAgenda.data?.data}</div>;

  const headerTabel = [
    "id",
    "poster",
    "judul",
    "deskripsi,",
    "tanggal",
    "waktu",
    "pelaksanaan",
    "pembicara",
    "penyelenggara",
    "kategori",
    "topik",
    "biaya",
    "kalangan",
    "kota",
    "diupload_oleh",
  ];

  return (
    <div className="w-full max-w-xl flex items-center justify-center h-dvh overflow-y-scroll flex-col gap-y-2">
      <Badge color="red" onClick={() => redirect("/admin")}>
        ../admin
      </Badge>
      <Badge
        color="green"
        className="w-full max-w-xl flex items-center justify-center"
      >
        <Plus size={15} />
      </Badge>
      <CardParent className="overflow-x-scroll text-xs">
        <table>
          <thead>
            <tr>
              <td></td>
              {headerTabel.map((e, i) => (
                <td key={i}>
                  <CardParent>{e}</CardParent>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {allAgenda.data.data.map((e, i) => (
              <tr key={i}>
                <td>
                  <Badge className="max-w-fit" color="default">
                    <EllipsisVertical size={15} />
                  </Badge>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.id}
                  </CardParent>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.poster}
                  </CardParent>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.judul}
                  </CardParent>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.deskripsi}
                  </CardParent>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.tanggal.toString()}
                  </CardParent>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.waktu}
                  </CardParent>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.pelaksanaan}
                  </CardParent>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.pembicara}
                  </CardParent>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.penyelenggara}
                  </CardParent>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.kategori}
                  </CardParent>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.topik}
                  </CardParent>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.biaya}
                  </CardParent>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.kalangan}
                  </CardParent>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.kota}
                  </CardParent>
                </td>
                <td>
                  <CardParent
                    className={`whitespace-nowrap max-w-30 overflow-y-scroll ${
                      i % 2 == 0 && "bg-primary-foreground"
                    }`}
                  >
                    {e.userId}
                  </CardParent>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardParent>
    </div>
  );
}
