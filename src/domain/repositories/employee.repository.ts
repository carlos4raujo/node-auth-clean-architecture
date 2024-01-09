import { GetEmployeesDto } from "../dtos";
import { EmployeeEntity } from "../entities";

export abstract class EmployeeRepository {

  abstract getEmployees(getEmployeesDto: GetEmployeesDto): Promise<EmployeeEntity[]>
  
  abstract getEmployee(getEmployeesDto: GetEmployeesDto): Promise<EmployeeEntity>

}