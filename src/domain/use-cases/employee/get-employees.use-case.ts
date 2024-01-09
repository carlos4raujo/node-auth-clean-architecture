import { GetEmployeesDto } from "../../dtos";
import { EmployeeRepository } from "../../repositories";

interface Employee {
  id: string
  name: string,
}

interface GetEmployeesUseCase {
  execute(getEmployeesDto: GetEmployeesDto): Promise<Employee[]>
}

export class GetEmployees implements GetEmployeesUseCase {

  constructor(
    private readonly employeeRepository: EmployeeRepository,
  ) { }

  async execute(getEmployeesDto: GetEmployeesDto): Promise<Employee[]> {

    const employees = await this.employeeRepository.getEmployees(getEmployeesDto)

    return employees

  }
}