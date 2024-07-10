"use server";

import { AUTH_COOKIE } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logoutUser = () => {
  const cookie = cookies().get(AUTH_COOKIE);
  if (!cookie) return;

  cookies().delete(AUTH_COOKIE);
  redirect("/");
};
