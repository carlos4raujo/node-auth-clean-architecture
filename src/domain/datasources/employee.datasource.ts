import { GetEmployeesDto, GetEmployeeDto } from "../dtos";
import { EmployeeEntity } from "../entities";

export abstract class EmployeeDatasource {

  abstract getEmployees(getEmployeesDto: GetEmployeesDto): Promise<EmployeeEntity[]>
  
  abstract getEmployee(getEmployeeDto: GetEmployeeDto): Promise<EmployeeEntity>
  
}