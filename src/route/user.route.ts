import { Router } from "express";
import { UserController } from "../controller/user.controller";
import authMiddleware from "../middleware/auth.middleware";
import roleMiddleware from "../middleware/role.middleware";

const userRoute = Router();

// no token
userRoute.get("/", UserController.getUser);
userRoute.get("/:id", UserController.getUserById);

// has token
userRoute.post(
  "/",
  [authMiddleware, roleMiddleware],
  UserController.createUser
);
userRoute.put("/:id", authMiddleware, UserController.updateUser);
userRoute.delete("/:id", authMiddleware, UserController.deleteUser);

export default userRoute;
