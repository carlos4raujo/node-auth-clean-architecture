import { GetDevicesDto } from "../dtos";
import { DeviceEntity } from "../entities";

export abstract class DeviceRepository {

  abstract getDevices(getDevicesDto: GetDevicesDto): Promise<DeviceEntity[]>
  
}