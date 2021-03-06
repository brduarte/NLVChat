import { Response, Request } from "express";
import { MessagesService } from "../services/MessagesServices";

class MessagesController {
  static async create(request: Request, response: Response): Promise<Response> {
    try {
      const { admin_id, text, user_id } = request.body;

      const messagesService = new MessagesService();
      const message = await messagesService.create({
        admin_id,
        text,
        user_id,
      });

      return response.json(message);
    } catch (error) {
      return response.json(error);
    }
  }

  static async showByUser(request: Request, response: Response): Promise<Response> {
    const {user_id} = request.params
    const messagesService = new MessagesService();

    const messages = await messagesService.showByUser(user_id)

    return response.json(messages)
  }
}

export { MessagesController };
