import { Response, Request } from "express";
import { UsersServices } from "../services/UsersService";

class UsersController {
  static async create(request: Request, response: Response): Promise<Response> {
    try {
      const { email } = request.body;

      const usersServices = new UsersServices();
      const user = await usersServices.create({
        email,
      });

      return response.json(user);
    } catch (error) {
      return response.json(error);
    }
  }
}

export { UsersController };
