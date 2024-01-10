import { GetEmployeeDto } from "../../dtos";
import { Employee } from "../../interfaces";
import { EmployeeRepository } from "../../repositories";

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