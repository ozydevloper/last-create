"use client";
import { Badge } from "@/components/myui/badge";
import { CardParent } from "@/components/myui/card";
import { TitleApp } from "@/components/myui/title.app";
import { redirect } from "next/navigation";

export default function Page() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <CardParent className="items-center justify-center max-w-fit gap-y-1">
        <TitleApp className="text-lg" />
        <CardParent className="flex-row gap-x-1">
          <Badge onClick={() => redirect("/admin/user")} color="blue">
            User Tabel
          </Badge>
          <Badge onClick={() => redirect("/admin/tag")} color="blue">
            Tag Tabel
          </Badge>
        </CardParent>
      </CardParent>
    </div>
  );
}
