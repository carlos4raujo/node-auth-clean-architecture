import { Router } from "express";
import { SettingsDatasourceImpl, SettingsRepositoryImpl } from "../../infrastructure";
import { SettingsController } from "./controller";

export class SettingsRoutes {
  static get routes(): Router {
    const router = Router()
    
    const datasource = new SettingsDatasourceImpl()

    const settingsRepository = new SettingsRepositoryImpl(datasource)
    
    const controller = new SettingsController(settingsRepository)

    router.get('/', controller.getSettings)

    return router
  }
}