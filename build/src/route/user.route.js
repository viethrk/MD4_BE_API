"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const userRoute = (0, express_1.Router)();
// no token
userRoute.get("/", user_controller_1.UserController.getUser);
userRoute.get("/:id", user_controller_1.UserController.getUserById);
// has token
userRoute.post("/", auth_middleware_1.default, user_controller_1.UserController.createUser);
userRoute.put("/:id", auth_middleware_1.default, user_controller_1.UserController.updateUser);
userRoute.delete("/:id", auth_middleware_1.default, user_controller_1.UserController.deleteUser);
exports.default = userRoute;
