import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

routes.post("/users", UsersController.create)
routes.post("/settings", SettingsController.create);
routes.post('/messages', MessagesController.create)

export { routes };
