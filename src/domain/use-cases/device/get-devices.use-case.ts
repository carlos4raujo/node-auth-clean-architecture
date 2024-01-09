import { GetDevicesDto, GetEmployeesDto } from "../../dtos";
import { DeviceRepository } from "../../repositories";

interface Device {
  id: string
  name: string,
  code: string,
}

interface GetDevicesUseCase {
  execute(getDevicesDto: GetDevicesDto): Promise<Device[]>
}

export class GetDevices implements GetDevicesUseCase {

  constructor(
    private readonly deviceRepository: DeviceRepository,
  ) { }

  async execute(getDevicesDto: GetDevicesDto): Promise<Device[]> {

    const devices = await this.deviceRepository.getDevices(getDevicesDto)

    return devices

  }
}