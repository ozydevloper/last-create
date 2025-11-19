"use client";

import { Detail } from "@/components/myui/core-component/detail";
import { MenuBar } from "@/components/myui/core-component/menu";
import { Post } from "@/components/myui/core-component/post";
import { TopBar } from "@/components/myui/core-component/top.bar";

export default function Home() {
  return (
    <div className="w-full min-h-dvh flex flex-col gap-y-2 items-center ">
      <Detail />
      <MenuBar />
      <TopBar />
      <div className="w-full flex flex-col items-center justify-center gap-y-5 mt-2">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
