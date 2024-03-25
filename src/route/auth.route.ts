import { Router } from "express";
import { AuthController } from "../controller/auth.controller";

const authRoute = Router();

authRoute.post("/login", AuthController.login);

export default authRoute;
