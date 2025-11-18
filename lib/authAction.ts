"use server";

import { signIn, signOut } from "@/app/auth";

export async function login() {
  return await signIn("google", { redirectTo: "/profile" });
}

export async function logout() {
  return await signOut({ redirectTo: "/login" });
}
