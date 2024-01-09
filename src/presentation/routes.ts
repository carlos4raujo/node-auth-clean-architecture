import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { LocationRoutes } from "./location/routes";
import { EmployeeRoutes } from "./employee/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router()

    router.use('/api/auth', AuthRoutes.routes)
    router.use('/api/locations', LocationRoutes.routes)
    router.use('/api/employees', EmployeeRoutes.routes)

    return router
  }
}