import { Response, Request } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  static async create(request: Request, response: Response) {
    try {
      const { chat, username } = request.body;

      const settingsService = new SettingsService();
      const setting = await settingsService.create({
        chat,
        username,
      });

      response.json(setting);
    } catch (error) {
      response.json(error);
    }
  }
}

export { SettingsController };
