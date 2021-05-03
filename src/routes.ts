import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { SettingsService } from "./services/SettingsService";

const routes = Router();

routes.post("/settings", SettingsController.create);

export { routes };
