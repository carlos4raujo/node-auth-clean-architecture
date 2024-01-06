import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infrastructure";
import { AuthMiddleware } from "../middlewares";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router()
    
    const datasource = new AuthDatasourceImpl()

    const authRepository = new AuthRepositoryImpl(datasource)
    
    const controller = new AuthController(authRepository)

    router.post('/login', controller.loginUser)
    router.post('/register', controller.registerUser)
    router.get('/users', AuthMiddleware.validateJWT, controller.getUsers)

    return router
  }
}