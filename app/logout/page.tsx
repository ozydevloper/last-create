"use client";
import { Badge } from "@/components/myui/badge";
import { CardParent, CardSubTitle } from "@/components/myui/card";
import { TitleApp } from "@/components/myui/title.app";
import { logout } from "@/lib/authAction";
import { redirect } from "next/navigation";

export default function Logout() {
  return (
    <div className="w-full flex justify-center items-center h-dvh select-none">
      <CardParent>
        <div className="w-full flex items-center justify-center my-5">
          <TitleApp />
        </div>
        <div className="flex flex-col gap-y-2">
          <CardSubTitle className="font-bold text-center justify-center">
            Yakin ingin logout ?
          </CardSubTitle>
          <CardParent className="flex-row items-center justify-between gap-x-2">
            <Badge
              color="red"
              className="w-full text-center p-3 hover:scale-98 active:scale-95"
              onClick={async () => {
                await logout();
                location.reload();
              }}
            >
              Ya
            </Badge>
            <Badge
              color="blue"
              className="w-full text-center p-3 hover:scale-98 active:scale-95"
              onClick={() => redirect("/")}
            >
              Tidak
            </Badge>
          </CardParent>
        </div>
      </CardParent>
    </div>
  );
}
