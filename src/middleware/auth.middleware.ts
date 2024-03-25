import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { User } from "../entity/user.entity";
import { UserService } from "../service/user.service";

type UserDecode = {
  user_name: string;
  address: string;
};

const authMiddleware = async (req: Request, res: Response, next: Function) => {
  const token = req.header("Authorization");
  try {
    const userDecode = jwt.verify(
      token,
      process.env.API_SECRET_KEY
    ) as UserDecode;
    const { user_name, address } = userDecode;

    const userQuery = new User();
    userQuery.user_name = user_name;
    userQuery.address = address;

    const userFind = await UserService.getUserByQuery(userQuery);

    if (!userFind) {
      res.status(404).json("User not found!!!");
    }
    req.user = userFind;
    next();
  } catch (err) {
    res.status(404).json("Token invalid!!!");
  }
};

export default authMiddleware;
