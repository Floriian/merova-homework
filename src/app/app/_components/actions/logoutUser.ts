"use server";

import { AUTH_COOKIE_NAME } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logoutUser = () => {
  const cookie = cookies().get(AUTH_COOKIE_NAME);
  console.log(cookie);
  if (!cookie) return;

  cookies().delete(AUTH_COOKIE_NAME);
  redirect("/");
};
