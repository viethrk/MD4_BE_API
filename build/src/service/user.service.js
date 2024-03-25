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
exports.UserService = void 0;
const db_config_1 = require("../config/db.config");
const user_entity_1 = require("../entity/user.entity");
class UserService {
}
exports.UserService = UserService;
_a = UserService;
UserService.userRepo = db_config_1.dbConfig.getRepository(user_entity_1.User);
UserService.getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield _a.userRepo.find();
});
UserService.getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield _a.userRepo.findOneBy({
        id,
    });
});
UserService.getUserByQuery = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield _a.userRepo.findOneBy(query);
});
// them mot user
UserService.addUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    const user = _a.userRepo.create(_a.addDefaulValue(newUser));
    return yield _a.userRepo.save(user);
});
// update thong tin user
UserService.updateUser = (userId, newInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _a.getUserById(userId);
    _a.userRepo.merge(user, _a.addDefaulValue(newInfo));
    return yield _a.userRepo.save(user);
});
// xoa user
UserService.deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield _a.userRepo.delete({ id });
});
UserService.addDefaulValue = (user) => {
    user.created_at = "132";
    user.updated_at = "132";
    return user;
};
