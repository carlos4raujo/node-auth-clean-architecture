import { Router } from "express";
import { DeviceDatasourceImpl, DeviceRepositoryImpl } from "../../infrastructure";
import { DeviceController } from "./controller";

export class DeviceRoutes {
  static get routes(): Router {
    const router = Router()
    
    const datasource = new DeviceDatasourceImpl()

    const deviceRepository = new DeviceRepositoryImpl(datasource)
    
    const controller = new DeviceController(deviceRepository)

    router.get('/', controller.getDevices)

    return router
  }
}