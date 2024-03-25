import { Request, Response } from "express";
import { UserService } from "../service/user.service";

export class UserController {
  static getUser = async (req: Request, res: Response) => {
    const users = await UserService.getUser();
    res.status(200).json(users);
  };

  static getUserById = async (req: Request, res: Response) => {
    const userId = +req.params.id;
    const user = await UserService.getUserById(userId);
    res.status(200).json({ user, books: user.books });
  };

  static createUser = async (req: Request, res: Response) => {
    const userNew = await UserService.addUser(req.body);
    res.status(201).json(userNew);
  };

  static updateUser = async (req: Request, res: Response) => {
    const userUpdate = await UserService.updateUser(+req.params.id, req.body);
    res.status(201).json(userUpdate);
  };

  static deleteUser = async (req: Request, res: Response) => {
    await UserService.deleteUser(+req.params.id);
    res.status(204).end();
  };
}
