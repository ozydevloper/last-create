import { Search } from "lucide-react";
import { CardParent } from "../card";
import { redirect } from "next/navigation";
import { useModeZustand } from "@/lib/zustand";

export const TopBar = () => {
  const modeType = useModeZustand((state) => state.modeType);
  const setModeType = useModeZustand((state) => state.setModetype);
  return (
    <CardParent className="gap-y-1">
      <CardParent
        onClick={() => redirect("/search")}
        className="w-full flex-row items-center justify-center text-center gap-x-1 text-sm active:scale-105 transition-all ease-in-out duration-200 active:bg-primary active:text-primary-foreground"
      >
        <Search size={15} />
        Cari agenda
      </CardParent>
      <CardParent className="flex-row items-center justify-between gap-x-1">
        <div
          onClick={() => setModeType("home")}
          className={`w-full p-3 text-xs font-bold rounded-md items-center justify-center text-center ${modeType == "home" ? "bg-primary text-primary-foreground" : "text-muted-foreground"} transition-all ease-in-out duration-200`}
        >
          Event hari ini
        </div>

        <div
          onClick={() => setModeType("upcoming")}
          className={`w-full p-3 text-xs font-bold rounded-md items-center justify-center text-center ${modeType == "upcoming" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
        >
          Event upcoming
        </div>
      </CardParent>
    </CardParent>
  );
};
