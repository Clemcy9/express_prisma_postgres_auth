import express from "express";
import { userRoute } from "./routes/userRoutes.js";
import { authRoutes } from "./routes/authRoutes.js";
import { auth_middleware } from "./middlewares/authMiddleware.js";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(auth_middleware);
app.use("/users", userRoute);
app.use("/auth", authRoutes);
