"use client";
import { logout } from "@/lib/authAction";
import { redirect } from "next/navigation";

export default function Home() {
  return <div onClick={() => redirect("/login")}>lout</div>;
}
