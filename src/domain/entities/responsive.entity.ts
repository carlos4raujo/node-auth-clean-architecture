import { EmployeeEntity } from "./employee.entity";

export class ResponsiveEntity {

  constructor(
    public id: string,
    public serialNumber: string,
    public brand: string,
    public model: string,
    public type: string,
    public comment: string,
    public isSigned: string,
    public createdAt: string,
    public referenceNumbe: string,
    public assigner: EmployeeEntity,
    public approver: EmployeeEntity,
    public receiver: EmployeeEntity,
  ) {}

}