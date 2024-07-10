import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  image: z.string().url(),
  token: z.string(),
  refreshToken: z.string(),
});
export type User = z.infer<typeof userSchema>;
