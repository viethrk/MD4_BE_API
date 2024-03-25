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
exports.AuthController = void 0;
const user_entity_1 = require("../entity/user.entity");
const user_service_1 = require("../service/user.service");
const jwt = require("jsonwebtoken");
class AuthController {
}
exports.AuthController = AuthController;
_a = AuthController;
AuthController.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_name, password } = req.body;
    // query db
    const userQuery = new user_entity_1.User();
    userQuery.user_name = user_name;
    userQuery.password = password;
    const userFind = yield user_service_1.UserService.getUserByQuery(userQuery);
    console.log(userFind);
    if (!userFind) {
        res.status(404).json("Not found!!!");
    }
    const objEndcode = {
        user_name: userFind.user_name,
        address: userFind.address,
    };
    // endcode
    const token = jwt.sign(objEndcode, process.env.API_SECRET_KEY);
    res.status(201).json({ token });
});
