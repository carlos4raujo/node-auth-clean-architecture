import { GetEmployeeDto } from "../../dtos";
import { EmployeeRepository } from "../../repositories";

interface Employee {
  id: string
  name: string,
}

interface GetEmployeeUseCase {
  execute(getEmployeeDto: GetEmployeeDto): Promise<Employee>
}

export class GetEmployee implements GetEmployeeUseCase {

  constructor(
    private readonly employeeRepository: EmployeeRepository,
  ) { }

  async execute(getEmployeesDto: GetEmployeeDto): Promise<Employee> {

    const employee = await this.employeeRepository.getEmployee(getEmployeesDto)

    return employee

  }
}