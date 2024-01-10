import { Router } from "express";
import { ResponsiveDatasourceImpl, ResponsiveRepositoryImpl } from "../../infrastructure";
import { ResponsiveController } from "./controller";

export class ResponsiveRoutes {
  static get routes(): Router {
    const router = Router()
    
    const datasource = new ResponsiveDatasourceImpl()

    const responsiveRepository = new ResponsiveRepositoryImpl(datasource)
    
    const controller = new ResponsiveController(responsiveRepository)

    router.get('/', controller.getResponsives)

    return router
  }
}