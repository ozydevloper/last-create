"use client";
import { Badge } from "@/components/myui/badge";
import { CardParent, CardSubTitle } from "@/components/myui/card";
import { Input } from "@/components/myui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { apiFetch } from "@/lib/hmac/signature";
import {
  BiayaType,
  KalanganType,
  KategoriType,
  KotaType,
  TopikType,
} from "@/types/tags";
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { ArrowUp, EllipsisVertical, Plus } from "lucide-react";
import { redirect } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";

const TagTabel = ({
  tagQuery,
  setShow,
  name,
}: {
  tagQuery: UseQueryResult<{
    data:
      | KategoriType[]
      | TopikType[]
      | BiayaType[]
      | KalanganType[]
      | KotaType[]
      | string;
  }>;
  setShow: Dispatch<
    SetStateAction<{
      nameTag: string;
      tagType: KategoriType;
    } | null>
  >;
  name: string;
}) => {
  if (tagQuery.isLoading) return <div>loading..</div>;
  if (tagQuery.error) return <div>Error: {JSON.stringify(tagQuery.error)}</div>;
  if (!Array.isArray(tagQuery.data?.data))
    return (
      <div>
        {name} : {tagQuery.data?.data}
      </div>
    );

  const headers = ["name", "dipakai_agenda", "dipakai_preferensi"];
  return (
    <CardParent className="overflow-x-scroll overflow-hidden text-xs items-center justify-center">
      <CardParent>
        <CardSubTitle>{name}</CardSubTitle>
      </CardParent>
      <table>
        <thead>
          <tr>
            <td></td>
            {headers.map((e, i) => {
              return (
                <td key={i}>
                  <CardParent>{e}</CardParent>
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tagQuery.data.data.map((e, i) => (
            <tr key={i}>
              <td>
                <Badge
                  onClick={() => setShow({ nameTag: name, tagType: e })}
                  color="default"
                  className="max-w-fit"
                >
                  <EllipsisVertical size={15} />
                </Badge>
              </td>
              <td>
                <CardParent
                  className={`${
                    i % 2 == 0 && "bg-primary-foreground"
                  }  whitespace-nowrap w-full  overflow-x-scroll overflow-hidden`}
                >
                  {e.name}
                </CardParent>
              </td>
              <td>
                <CardParent
                  className={`${
                    i % 2 == 0 && "bg-primary-foreground"
                  }  whitespace-nowrap w-full  overflow-x-scroll overflow-hidden`}
                >
                  {e?.agenda?.length}
                </CardParent>
              </td>
              <td>
                <CardParent
                  className={`${
                    i % 2 == 0 && "bg-primary-foreground"
                  }  whitespace-nowrap overflow-x-scroll  overflow-hidden w-full`}
                >
                  {e?.preferensis?.length}
                </CardParent>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CardParent>
  );
};

export default function Page() {
  const queryClient = useQueryClient();
  const [isShow, setIsShow] = useState<{
    nameTag: string;
    tagType: KategoriType;
  } | null>(null);
  const [typeTag, setTypeTag] = useState<{
    type: string;
    newName: string;
  } | null>(null);

  const mutationCreateTag = useMutation({
    mutationFn: () => {
      if (
        typeTag === null ||
        typeTag.newName.trim() === "" ||
        typeTag.type === ""
      ) {
        throw new Error("Salah Request");
      }
      return apiFetch(`/api/query/tag/createTag/${typeTag.type}`, {
        method: "POST",
        body: JSON.stringify(typeTag),
      });
    },
    onError: (error) => {
      toast.error("Error", { description: error.message, richColors: true });
    },
    onSuccess: async (res) => {
      const message: { data: string } = await res.json();
      toast.info("Status", { description: message.data, richColors: true });
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [typeTag?.type] }),
  });

  const mutationDeleteTag = useMutation({
    mutationFn: () => {
      if (
        isShow?.tagType.name === null ||
        isShow?.tagType.name === "" ||
        isShow?.nameTag === ""
      ) {
        throw new Error("Salah Request");
      }
      return apiFetch(`/api/query/tag/deleteTag`, {
        method: "POST",
        body: JSON.stringify({
          type: isShow?.nameTag,
          name: isShow?.tagType.name,
        }),
      });
    },
    onError: (error) => {
      toast.error("Error", { description: error.message, richColors: true });
    },
    onSuccess: async (res) => {
      const message: { data: string } = await res.json();
      toast.info("Status", { description: message.data, richColors: true });
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [isShow?.nameTag] }),
  });

  const allKategori = useQuery({
    queryKey: ["kategori"],
    queryFn: () => {
      return apiFetch("/api/query/tag/getAllTags/kategori").then((res) =>
        res.json()
      );
    },
  });

  const allTopik = useQuery({
    queryKey: ["topik"],
    queryFn: () => {
      return apiFetch("/api/query/tag/getAllTags/topik").then((res) =>
        res.json()
      );
    },
  });

  const allBiaya = useQuery({
    queryKey: ["biaya"],
    queryFn: () => {
      return apiFetch("/api/query/tag/getAllTags/biaya").then((res) =>
        res.json()
      );
    },
  });

  const allKalangan = useQuery({
    queryKey: ["kalangan"],
    queryFn: () => {
      return apiFetch("/api/query/tag/getAllTags/kalangan").then((res) =>
        res.json()
      );
    },
  });

  const allKota = useQuery({
    queryKey: ["kota"],
    queryFn: () => {
      return apiFetch("/api/query/tag/getAllTags/kota").then((res) =>
        res.json()
      );
    },
  });

  return (
    <div className="w-full h-fit flex flex-col items-center justify-center gap-y-2 overflow-y-scroll">
      {/* START INI POP UP UPDATE  */}

      <div
        className={`inset-0 h-dvh fixed bg-black/50 z-50 flex justify-center items-center transition-all ease-in-out duration-300 text-xs ${
          isShow ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {isShow && (
          <CardParent>
            <Badge
              onClick={() => setIsShow(null)}
              color="green"
              className="flex justify-center items-center"
            >
              <ArrowUp size={15} />
            </Badge>

            <CardParent>
              <CardSubTitle>name {isShow.nameTag}</CardSubTitle>
              <CardParent>
                <CardSubTitle>{isShow.tagType.name}</CardSubTitle>
              </CardParent>
            </CardParent>
            <CardParent>
              <CardSubTitle>digunakan agenda</CardSubTitle>
              <CardParent>{isShow?.tagType?.agenda?.length}</CardParent>
            </CardParent>
            <CardParent>
              <CardSubTitle>digunakan preferensi</CardSubTitle>
              <CardParent>{isShow?.tagType?.preferensis?.length}</CardParent>
            </CardParent>
            <Badge
              onClick={() => {
                toast.promise(async () => mutationDeleteTag.mutateAsync(), {
                  loading: "Tunggu sebentar...",
                });
              }}
              color="red"
              className="text-center"
            >
              delete
            </Badge>
          </CardParent>
        )}
      </div>
      {/* END INI POP UP UPDATE  */}

      {/* START INI POP UP CREATE  */}
      <div
        className={`inset-0 h-dvh fixed bg-black/50 z-50 flex justify-center items-center transition-all ease-in-out duration-300 text-xs ${
          typeTag ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {typeTag && (
          <CardParent>
            <Badge
              onClick={() => setTypeTag(null)}
              color="red"
              className="flex justify-center items-center"
            >
              <ArrowUp size={15} />
            </Badge>
            <CardParent>
              <CardSubTitle>New {typeTag?.type}</CardSubTitle>
            </CardParent>
            <CardParent>
              <Input
                onChange={(e) =>
                  setTypeTag({
                    type: typeTag.type,
                    newName: e.target.value,
                  })
                }
              />
            </CardParent>
            <Badge
              onClick={() => {
                toast.promise(
                  async () => await mutationCreateTag.mutateAsync(),
                  {
                    loading: "Tunggu sebentar",
                  }
                );
              }}
              color="green"
              className="text-center"
            >
              Submit
            </Badge>
          </CardParent>
        )}
      </div>
      {/* END INI POP UP CREATE  */}

      <Badge color="red" onClick={() => redirect("/admin")}>
        ../admin
      </Badge>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full  flex items-center justify-center max-w-xl">
          <Badge
            color="green"
            className="w-full flex items-center justify-center"
          >
            <Plus size={15} />
          </Badge>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Badge
              className="w-full"
              onClick={() =>
                setTypeTag({
                  type: "kategori",
                  newName: "tidak tahu",
                })
              }
              color="default"
            >
              Kategori
            </Badge>
            <Badge
              className="w-full"
              onClick={() =>
                setTypeTag({
                  type: "topik",
                  newName: "tidak tahu",
                })
              }
              color="default"
            >
              Topik
            </Badge>
            <Badge
              className="w-full"
              onClick={() =>
                setTypeTag({
                  type: "biaya",
                  newName: "tidak tahu",
                })
              }
              color="default"
            >
              Biaya
            </Badge>
            <Badge
              className="w-full"
              onClick={() =>
                setTypeTag({
                  type: "kalangan",
                  newName: "tidak tahu",
                })
              }
              color="default"
            >
              Kalangan
            </Badge>
            <Badge
              className="w-full"
              onClick={() =>
                setTypeTag({
                  type: "kota",
                  newName: "tidak tahu",
                })
              }
              color="default"
            >
              Kota
            </Badge>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TagTabel tagQuery={allKategori} name="kategori" setShow={setIsShow} />
      <TagTabel tagQuery={allTopik} name="topik" setShow={setIsShow} />
      <TagTabel tagQuery={allBiaya} name="biaya" setShow={setIsShow} />
      <TagTabel tagQuery={allKalangan} name="kalangan" setShow={setIsShow} />
      <TagTabel tagQuery={allKota} name="kota" setShow={setIsShow} />
    </div>
  );
}
