import { EmployeeRepository, EmployeeDatasource, EmployeeEntity, GetEmployeesDto, GetEmployeeDto } from "../../domain";

export class EmployeeRepositoryImpl implements EmployeeRepository {

  constructor(
    private readonly datasource: EmployeeDatasource
  ) { }

  getEmployees(getEmployeesDto: GetEmployeesDto): Promise<EmployeeEntity[]> {
    return this.datasource.getEmployees(getEmployeesDto)
  }

  getEmployee(getEmployeeDto: GetEmployeeDto): Promise<EmployeeEntity> {
    return this.datasource.getEmployee(getEmployeeDto)
  }

}