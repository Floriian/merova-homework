import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "A mező kitöltése kötelező" })
    .min(1, "A mező kitöltése kötelező"),
  password: z
    .string({ required_error: "A mező kitöltése kötelező" })
    .min(1, "A mező kitöltése kötelező"),
  rememberMe: z.boolean().default(false),
});

export type LoginSchema = z.infer<typeof loginSchema>;
