"use client";

import { Button } from "@/components";
import { authActions } from "./actions";

export function LogoutButton() {
  return <Button onClick={() => authActions.logoutUser()}>Log Out</Button>;
}
