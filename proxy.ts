import { NextAuthRequest } from "next-auth";
import { auth } from "./app/auth";
import { NextResponse } from "next/server";

export default auth((request: NextAuthRequest) => {
  if (!!!request.auth) {
    const baseURL = new URL("/login", request.url);

    if (request.nextUrl.pathname === "/profile")
      return NextResponse.redirect(baseURL);
  }

  if (!!request.auth) {
    if (request.nextUrl.pathname === "/login")
      return NextResponse.redirect(new URL("/", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/api/query")) {
    const token = request.headers.get("nothing-to-see");
    if (!!!token) {
      return NextResponse.json({ error: "missing signatur" });
    }
  }
});
