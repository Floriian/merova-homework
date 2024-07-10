"use server";

import { redirect } from "next/navigation";
import { loginSchema, LoginSchema } from "../schemas";
import { User } from "@/app/app/_components";
import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME } from "@/constants";

export const loginUser = async (data: LoginSchema) => {
  //Every action is a network request, so let's validate the request data.
  const validateFields = loginSchema.safeParse(data);
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  const request = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: data.email,
      password: data.password,
    }),
  });

  if (request.ok) {
    const user = (await request.json()) as User;
    cookies().set(AUTH_COOKIE_NAME, user.token, {
      secure: true,
      httpOnly: true,
    });
    return redirect("/app");
  }
  if (!request.ok) {
    const { message } = (await request.json()) as { message: string };
    return { success: false, message };
  }
};
