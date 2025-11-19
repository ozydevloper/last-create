"use client";

import { MenuBar } from "@/components/myui/core-component/menu";
import { Post } from "@/components/myui/core-component/post";
import { TopBar } from "@/components/myui/core-component/top.bar";

export default function Home() {
  return (
    <div className="w-full min-h-dvh flex flex-col gap-y-2 items-center ">
      <MenuBar />
      <TopBar />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
