import { EmployeeEntity } from "../../domain";

export class EmployeeMapper {

  static employeeEntityFromObject = (object: { [key: string]: any }) => {

    const { id, name, email, employee_number } = object

    const boss: any = object.boss ? this.employeeEntityFromObject(object.boss) : {}
    const location = object.location ? object.location : {}
    const position = object.position ? object.position : {}

    return new EmployeeEntity(
      id,
      name,
      email,
      employee_number,
      boss,
      location,
      position
    )

  }

}