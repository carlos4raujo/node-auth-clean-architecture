import { GetEmployeesDto } from "../dtos";
import { EmployeeEntity } from "../entities";

export abstract class EmployeeDatasource {

  abstract getEmployees(getEmployeesDto: GetEmployeesDto): Promise<EmployeeEntity[]>

}