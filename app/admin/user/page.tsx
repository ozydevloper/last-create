"use client";

import { CardParent } from "@/components/myui/card";
import { apiFetch } from "@/lib/hmac/signature";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-dvh">
      <CardParent className="overflow-auto w-md"></CardParent>
    </div>
  );
}
