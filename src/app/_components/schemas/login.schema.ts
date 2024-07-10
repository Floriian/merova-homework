import { z } from "zod";

export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
  rememberMe: z.boolean().default(false),
});

export type LoginSchema = z.infer<typeof loginSchema>;
