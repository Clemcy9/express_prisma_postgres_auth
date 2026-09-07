import { Router } from "express";
import { prisma } from "../config/db.js";
import {
  change_password,
  login,
  me,
  register,
} from "../controllers/authControllers.js";
import { auth_middleware } from "../middlewares/authMiddleware.js";

export const authRoutes = Router();

authRoutes.post("/register", register);

authRoutes.post("/login", login);

// protected route
authRoutes.get("/me", auth_middleware, me);

authRoutes.post("/change-password", auth_middleware, change_password);
