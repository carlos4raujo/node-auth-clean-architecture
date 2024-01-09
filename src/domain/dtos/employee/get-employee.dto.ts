export class GetEmployeeDto {

  constructor(public employeeNumber: string) {}

  static getEmployee(object: {[key: string]: any}): [string?, GetEmployeeDto?] {

    const { employeeNumber } = object

    if(!employeeNumber) return ['Missing employee number']

    return [undefined, new GetEmployeeDto(employeeNumber)]
  }

}