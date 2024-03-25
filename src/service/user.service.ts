import { dbConfig } from "../config/db.config";
import { User } from "../entity/user.entity";

export class UserService {
  private static userRepo = dbConfig.getRepository(User);

  static getUser = async () => {
    return await this.userRepo.find();
  };

  static getUserById = async (id: number) => {
    return await this.userRepo.findOneBy({
      id,
    });
  };

  static getUserByQuery = async (query: User) => {
    return await this.userRepo.findOneBy(query);
  };

  // them mot user
  static addUser = async (newUser: User) => {
    const user = this.userRepo.create(this.addDefaulValue(newUser));
    return await this.userRepo.save(user);
  };

  // update thong tin user
  static updateUser = async (userId: number, newInfo: User) => {
    const user = await this.getUserById(userId);
    this.userRepo.merge(user, this.addDefaulValue(newInfo));
    return await this.userRepo.save(user);
  };

  // xoa user
  static deleteUser = async (id: number) => {
    await this.userRepo.delete({ id });
  };

  private static addDefaulValue = (user: User) => {
    user.created_at = "132";
    user.updated_at = "132";
    return user;
  };
}
