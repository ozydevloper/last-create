"use client";

import { redirect } from "next/navigation";
import { ClassNameValue } from "tailwind-merge";

export const TitleApp = ({ className }: { className?: ClassNameValue }) => {
  return (
    <div
      onClick={() => redirect("/")}
      className={`max-w-min text-2xl font-extrabold p-2 bg-primary text-primary-foreground rounded-md active:bg-primary-foreground active:text-primary active:scale-95 transition-all ease-in-out duration-200 ${className}`}
    >
      Hayuke
    </div>
  );
};
