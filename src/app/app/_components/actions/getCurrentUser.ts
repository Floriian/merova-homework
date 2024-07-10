"use server";

import { AUTH_COOKIE_NAME } from "@/constants";
import { cookies } from "next/headers";
import { User } from "../schemas";

export const getCurrentUser = async () => {
  const cookie = cookies().get(AUTH_COOKIE_NAME);

  const request = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookie?.value}`,
    },
  });

  if (!request.ok) {
    throw new Error("EXPIRED_JWT");
  }

  return (await request.json()) as User;
};
