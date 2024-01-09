import { EmployeeRepository, GetLocationsDto, LocationEntity, EmployeeDatasource, EmployeeEntity } from "../../domain";

export class EmployeeRepositoryImpl implements EmployeeRepository {

  constructor(
    private readonly datasource: EmployeeDatasource
  ) { }

  getEmployees(getEmployeesDto: GetLocationsDto): Promise<EmployeeEntity[]> {
    return this.datasource.getEmployees(getEmployeesDto)
  }

}