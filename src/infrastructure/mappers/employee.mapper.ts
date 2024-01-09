import { EmployeeEntity } from "../../domain";

export class EmployeeMapper {

  static employeeEntityFromObject(object: { [key: string]: any }) {

    const { id, name, email, location, position } = object

    return new EmployeeEntity(
      id,
      name,
      email,
      location,
      position
    )

  }

}