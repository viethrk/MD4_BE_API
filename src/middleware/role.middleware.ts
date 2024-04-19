import { Request, Response } from "express";
import { URL_USER } from "../constant/url.constant";

const roleMiddleware = async (req: Request, res: Response, next: Function) => {
  try {
    const user = req.user;

    const url = req.baseUrl;

    const role = user.role;

    if (role == "Admin" || URL_USER[url]) {
      next();
      return;
    }

    res.status(404).end();
  } catch (err) {
    res.status(404).json("Token invalid!!!");
  }
};

export default roleMiddleware;
