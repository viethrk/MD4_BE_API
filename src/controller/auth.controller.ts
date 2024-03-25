import { Request, Response } from "express";
import { User } from "../entity/user.entity";
import { UserService } from "../service/user.service";
import * as jwt from "jsonwebtoken";

export class AuthController {
  static login = async (req: Request, res: Response) => {
    const { user_name, password } = req.body;
    // query db
    const userQuery = new User();
    userQuery.user_name = user_name;
    userQuery.password = password;

    const userFind = await UserService.getUserByQuery(userQuery);

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
  };
}
