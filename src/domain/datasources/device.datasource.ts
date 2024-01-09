import { GetDevicesDto } from "../dtos";
import { DeviceEntity } from "../entities";

export abstract class DeviceDatasource {

  abstract getDevice(getDevicesDto: GetDevicesDto): Promise<DeviceEntity[]>
  
}