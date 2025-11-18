"use client";
import { CardParent, CardSubTitle } from "@/components/myui/card";
import { TitleApp } from "@/components/myui/title.app";
import { login } from "@/lib/authAction";
import Image from "next/image";
import { toast } from "sonner";

export default function Login() {
  return (
    <div className="w-full flex justify-center items-center h-dvh select-none">
      <CardParent>
        <div className="w-full flex items-center justify-center my-5">
          <TitleApp />
        </div>
        <div className="flex flex-col gap-y-2">
          <CardSubTitle className="font-bold">login dengan:</CardSubTitle>
          <div
            onClick={() => {
              toast.loading("Tunggu sebentar...", { position: "top-center" });
              login();
            }}
            className="w-full flex items-center justify-start gap-x-3 text-center font-bold border rounded-md p-2 active:bg-primary-foreground transition-all ease-in-out duration-200 active:scale-105 hover:bg-primary-foreground hover:scale-95"
          >
            <Image
              src={"/google.icon.svg"}
              alt="google icon"
              width={25}
              height={25}
            />
            Google
          </div>
        </div>
      </CardParent>
    </div>
  );
}
