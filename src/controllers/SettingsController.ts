import { Response, Request } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  static async create(request: Request, response: Response): Promise<Response> {
    try {
      const { chat, username } = request.body;

      const settingsService = new SettingsService();
      const setting = await settingsService.create({
        chat,
        username,
      });

      return response.json(setting);
    } catch (error) {
      return response.json(error);
    }
  }
}

export { SettingsController };
