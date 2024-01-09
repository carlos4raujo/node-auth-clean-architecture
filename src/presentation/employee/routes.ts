import { Router } from "express";
import { EmployeeDatasourceImpl, EmployeeRepositoryImpl } from "../../infrastructure";
import { EmployeeController } from "./controller";

export class EmployeeRoutes {
  static get routes(): Router {
    const router = Router()
    
    const datasource = new EmployeeDatasourceImpl()

    const employeeRepository = new EmployeeRepositoryImpl(datasource)
    
    const controller = new EmployeeController(employeeRepository)

    router.get('/:employeeNumber', controller.getEmployee)
    
    router.get('/', controller.getEmployees)


    return router
  }
}