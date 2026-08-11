import express from "express";
import { userRoute } from "./routes/userRoutes.js";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoute);
