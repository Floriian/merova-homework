"use server";

import { AUTH_COOKIE } from "@/constants";
import { cookies } from "next/headers";
import { User } from "../schemas";
import { fetchApi } from "@/utils";

export const getCurrentUser = async () => {
  const cookie = cookies().get(AUTH_COOKIE);

  const request = await fetchApi("/auth/me", {
    headers: {
      Authorization: `Bearer ${cookie?.value}`,
    },
  });

  if (!request.ok) {
    throw new Error("EXPIRED_JWT");
  }

  return (await request.json()) as User;
};
