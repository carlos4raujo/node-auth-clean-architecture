import { DeviceRepository, DeviceDatasource, GetDevicesDto, DeviceEntity } from "../../domain";

export class DeviceRepositoryImpl implements DeviceRepository {

  constructor(
    private readonly datasource: DeviceDatasource
  ) { }

  getDevices(getDevicesDto: GetDevicesDto): Promise<DeviceEntity[]> {
    return this.datasource.getDevice(getDevicesDto)
  }

}