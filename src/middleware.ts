import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authActions } from "./app/app/_components/actions";
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/app")) {
    try {
      await authActions.getCurrentUser();
      NextResponse.next();
    } catch (e) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}
