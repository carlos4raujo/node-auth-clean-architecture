import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { LocationRoutes } from "./location/routes";
import { EmployeeRoutes } from "./employee/routes";
import { SettingsRoutes } from "./settings/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router()

    router.use('/api/auth', AuthRoutes.routes)
    router.use('/api/locations', LocationRoutes.routes)
    router.use('/api/employees', EmployeeRoutes.routes)
    router.use('/api/settings', SettingsRoutes.routes)

    return router
  }
}