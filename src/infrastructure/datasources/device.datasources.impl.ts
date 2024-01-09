import DeviceModel from "../../data/mysql/models/device.model";
import { CustomError, DeviceDatasource, DeviceEntity } from "../../domain";
import { DeviceMapper } from "../mappers";

export class DeviceDatasourceImpl implements DeviceDatasource {

  async getDevice(): Promise<DeviceEntity[]> {
    try {

      const devices = await DeviceModel.findAll()

      return devices.map(DeviceMapper.DeviceEntityFromObject)

    }catch(error) {

      if(error instanceof CustomError) {
        throw error
      }

      throw CustomError.internalError()

    }

  }
}