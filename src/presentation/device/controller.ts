import { Request, Response } from "express"
import { CustomError, DeviceRepository, GetDevices, GetDevicesDto } from "../../domain"

export class DeviceController {

  constructor(
    private readonly deviceRepository: DeviceRepository,
  ) {}

  private handleError = (error: unknown, res: Response) => {
    if(error instanceof CustomError) return res.status(error.statusCode).json({ error: error.message })

    console.log(error)

    return res.status(500).json({ error: 'Internal server error' })
  }
  
  getDevices = async (req: Request, res: Response) => {
    
    const getDevicesDto = await GetDevicesDto.getDevices()
    
    return new GetDevices(this.deviceRepository)
      .execute(getDevicesDto!)
      .then(data => res.json(data))
      .catch(error => this.handleError(error, res))
  }
}