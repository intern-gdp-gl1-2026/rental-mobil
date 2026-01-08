import { z } from "zod";

export const createUserSchema = z.object({
  username: z.string().min(3).max(255),
  password: z.string().min(8).max(255),
  confirmPassword: z.string().min(8).max(255),
});

export const loginSchema = z.object({
  username: z.string().min(3).max(255),
  password: z.string().min(8).max(255),
});

export const toUserDTO = (user) => {
  return {
    id: user.id,
    username: user.username,
    password: user.password,
  };
};
