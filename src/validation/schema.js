import { z } from "zod";

export const personalSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters"),

  email: z
    .string()
    .email("Enter a valid email address"),
});

export const accountSchema = z.object({
  username: z
    .string()
    .min(4, "Username must be at least 4 characters"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});
