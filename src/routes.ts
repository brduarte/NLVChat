import { Router } from "express"
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositorys/SettingsRepository";

const routes = Router();

routes.post("/settings", async (request, response) => {
     const settingsRepository = getCustomRepository(SettingsRepository);
    const { chat, username } = request.body

    const setting = settingsRepository.create({
        chat,
        username,
    })

    await settingsRepository.save(setting)

    response.json(setting)
})

export {routes}