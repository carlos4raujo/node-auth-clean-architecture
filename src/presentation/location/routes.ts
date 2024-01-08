import { Router } from "express";
import { LocationRepositoryImpl } from "../../infrastructure";
import { LocationDatasourceImpl } from "../../infrastructure";
import { LocationController } from "./controller";

export class LocationRoutes {
  static get routes(): Router {
    const router = Router()
    
    const datasource = new LocationDatasourceImpl()

    const locationRepository = new LocationRepositoryImpl(datasource)
    
    const controller = new LocationController(locationRepository)

    router.get('/', controller.getLocations)

    return router
  }
}