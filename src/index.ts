import cors from "cors";
import express from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);

export { app };
