import { LocationEntity } from "./location.entity";
import { PositionEntity } from "./position.entity";

export class EmployeeEntity {

  constructor(
    public id: string,
    public name: string,
    public email: string,
    public location: LocationEntity,
    public position: PositionEntity,
  ) {}

}