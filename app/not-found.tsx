import { TitleApp } from "@/components/myui/title.app";

export default function NotFound() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-1">
        <TitleApp />
        <div className="font-bold text-sm text-muted-foreground  p-1 rounded-md">
          Halaman tidak ditemukan!
        </div>
      </div>
    </div>
  );
}
