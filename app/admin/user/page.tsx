"use client";

import { Badge } from "@/components/myui/badge";
import { CardParent, CardSubTitle } from "@/components/myui/card";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { apiFetch } from "@/lib/hmac/signature";
import { UserType } from "@/types/user";
import { SelectGroup, SelectItem } from "@radix-ui/react-select";

import { useQuery } from "@tanstack/react-query";
import { ArrowUp, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [isEdit, setIsEdit] = useState<null | UserType>(null);

  const { isLoading, error, data } = useQuery<{ data: UserType[] }>({
    queryKey: ["allUsers"],
    queryFn: async () => {
      return apiFetch("/api/query/user/getAllUsers").then((res) => res.json());
    },
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!Array.isArray(data?.data)) return <div>{data?.data}</div>;

  const headerTabel = [
    "id",
    "role",
    "email",
    "name",
    "no_hp",
    "image",
    "agenda_dibuat",
    "prefrensiId",
  ];

  return (
    <div className="flex flex-col justify-center items-center text-xs">
      <div
        className={`z-50 inset-0 h-dvh bg-black/50 fixed ${isEdit ? "translate-y-0" : "-translate-y-full"} transition-all ease-in-out duration-300 flex justify-center overflow-y-scroll`}
      >
        <CardParent className="justify-center gap-y-2 h-fit">
          <Badge
            color="blue"
            className="text-center flex items-center justify-center sticky top-2"
            onClick={() => setIsEdit(null)}
          >
            <ArrowUp size={15} />
          </Badge>
          <CardParent>
            <CardSubTitle>user Id</CardSubTitle>
            <CardSubTitle>{isEdit?.id}</CardSubTitle>
          </CardParent>
          <CardParent>
            <CardSubTitle>role</CardSubTitle>
            <Select>
              <SelectTrigger>
                <SelectValue
                  placeholder="Belum ada role"
                  defaultValue={isEdit?.role ?? ""}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="admin">admin</SelectItem>
                  <SelectItem value="admin">user</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardParent>
          <CardParent>
            <CardSubTitle>email</CardSubTitle>
            <CardSubTitle>{isEdit?.email}</CardSubTitle>
          </CardParent>
          <CardParent>
            <CardSubTitle>name</CardSubTitle>
            <CardSubTitle>{isEdit?.name}</CardSubTitle>
          </CardParent>
          <CardParent>
            <CardSubTitle>no hp</CardSubTitle>
            <CardSubTitle>{isEdit?.nomor_hp ?? "-"}</CardSubTitle>
          </CardParent>
          <CardParent>
            <CardSubTitle>image</CardSubTitle>
            <div className="max-w-32 w-32 h-32 max-h-32 ">
              <CardParent className="relative overflow-hidden h-full">
                {isEdit?.image ? (
                  <Image
                    src={isEdit.image}
                    alt={isEdit.name}
                    fill
                    className="object-fill"
                  />
                ) : (
                  "-"
                )}
              </CardParent>
            </div>
          </CardParent>{" "}
          <CardParent>
            <CardSubTitle>total agenda dibuat</CardSubTitle>
            <CardSubTitle>{isEdit?.agendaId?.length}</CardSubTitle>
          </CardParent>{" "}
          <CardParent>
            <CardSubTitle>prefrensi id</CardSubTitle>
            <CardSubTitle>{isEdit?.preferensiId?.id ?? "-"}</CardSubTitle>
          </CardParent>
          <Badge color="green" className="text-center">
            update
          </Badge>
          <Badge color="red" className="text-center">
            delete
          </Badge>
        </CardParent>
      </div>
      <CardParent className="overflow-x-scroll">
        <table>
          <thead>
            <tr>
              <td></td>
              {headerTabel.map((e, i) => {
                return (
                  <td key={i}>
                    <CardParent>{e}</CardParent>
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>
                    <Badge
                      color="default"
                      onClick={() => {
                        setIsEdit(e);
                        console.log(e);
                      }}
                    >
                      <EllipsisVertical size={10} />
                    </Badge>
                  </td>
                  <td>
                    <CardParent
                      className={` ${i % 2 == 0 && "bg-primary-foreground"} flex-row whitespace-nowrap min-w-25 max-w-25 overflow-x-auto`}
                    >
                      {e.id}
                    </CardParent>
                  </td>
                  <td>
                    <CardParent
                      className={` ${i % 2 == 0 && "bg-primary-foreground"} flex-row whitespace-nowrap max-w-25 overflow-x-auto min-w-25 `}
                    >
                      {e.role}
                    </CardParent>
                  </td>
                  <td>
                    <CardParent
                      className={` ${i % 2 == 0 && "bg-primary-foreground"} flex-row whitespace-nowrap overflow-x-auto min-w-25 `}
                    >
                      {e.email}
                    </CardParent>
                  </td>
                  <td>
                    <CardParent
                      className={` ${i % 2 == 0 && "bg-primary-foreground"} flex-row whitespace-nowrap max-w-25 overflow-x-auto min-w-25 `}
                    >
                      {e.name}
                    </CardParent>
                  </td>
                  <td>
                    <CardParent
                      className={` ${i % 2 == 0 && "bg-primary-foreground"} flex-row whitespace-nowrap max-w-25 overflow-x-auto min-w-25 `}
                    >
                      {e.nomor_hp}
                    </CardParent>
                  </td>
                  <td>
                    <CardParent
                      className={` ${i % 2 == 0 && "bg-primary-foreground"} flex-row whitespace-nowrap max-w-25 overflow-x-auto min-w-25 `}
                    >
                      {e.image}
                    </CardParent>
                  </td>
                  <td>
                    <CardParent
                      className={` ${i % 2 == 0 && "bg-primary-foreground"} flex-row whitespace-nowrap max-w-25 overflow-x-auto min-w-25 `}
                    >
                      {e.agendaId?.length}
                    </CardParent>
                  </td>
                  <td>
                    <CardParent
                      className={` ${i % 2 == 0 && "bg-primary-foreground"} flex-row whitespace-nowrap max-w-25 overflow-x-auto min-w-25 `}
                    >
                      {e.preferensiId?.id}
                    </CardParent>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardParent>
    </div>
  );
}
