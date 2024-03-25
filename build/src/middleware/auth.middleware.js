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
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const user_entity_1 = require("../entity/user.entity");
const user_service_1 = require("../service/user.service");
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header("Authorization");
    try {
        const userDecode = jwt.verify(token, process.env.API_SECRET_KEY);
        const { user_name, address } = userDecode;
        const userQuery = new user_entity_1.User();
        userQuery.user_name = user_name;
        userQuery.address = address;
        const userFind = yield user_service_1.UserService.getUserByQuery(userQuery);
        if (!userFind) {
            res.status(404).json("User not found!!!");
        }
        req.user = userFind;
        next();
    }
    catch (err) {
        res.status(404).json("Token invalid!!!");
    }
});
exports.default = authMiddleware;
