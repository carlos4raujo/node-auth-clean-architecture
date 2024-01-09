import { DeviceEntity } from "../../domain";

export class DeviceMapper {

  static DeviceEntityFromObject(object: { [key: string]: any }) {

    const { id, name, code } = object

    return new DeviceEntity(id, name, code)

  }

}