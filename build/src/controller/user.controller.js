"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../service/user.service");
class UserController {
}
exports.UserController = UserController;
_a = UserController;
UserController.getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_service_1.UserService.getUser();
    res.status(200).json(users);
});
UserController.getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = +req.params.id;
    const user = yield user_service_1.UserService.getUserById(userId);
    res.status(200).json({ user, books: user.books });
});
UserController.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userNew = yield user_service_1.UserService.addUser(req.body);
    res.status(201).json(userNew);
});
UserController.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userUpdate = yield user_service_1.UserService.updateUser(+req.params.id, req.body);
    res.status(201).json(userUpdate);
});
UserController.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_service_1.UserService.deleteUser(+req.params.id);
    res.status(204).end();
});
