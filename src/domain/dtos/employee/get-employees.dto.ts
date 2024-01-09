export class GetEmployeesDto {

  static getEmployees(): [string?, GetEmployeesDto?] {

    return [undefined, new GetEmployeesDto()]
  }
  
}