import { Menu, X } from "lucide-react";
import { Badge } from "../badge";
import { TitleApp } from "../title.app";
import { useState } from "react";
import { redirect } from "next/navigation";

export const MenuBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center justify-between w-full my-1 text-center gap-y-2 max-w-xl">
      <div className="flex items-center justify-between w-full">
        <TitleApp className="text-sm" />
        <Badge
          color={showMenu ? "red" : "blue"}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <X size={22} /> : <Menu size={22} />}
        </Badge>
      </div>
      <div
        className={`${showMenu ? "block" : "hidden"} w-full h-20 rounded-md flex flex-col`}
      >
        <div
          onClick={() => redirect("/login")}
          className="w-full p-1 text-md border-y active:bg-primary-foreground active:bg-primary transition-all ease-in-out duration-200 active:text-primary"
        >
          Login
        </div>
      </div>
    </div>
  );
};
