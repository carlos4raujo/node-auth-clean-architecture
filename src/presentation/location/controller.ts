import { Request, Response } from "express"
import { CustomError, GetLocations, GetLocationsDto, LocationRepository } from "../../domain"

export class LocationController {

  constructor(
    private readonly locationRepository: LocationRepository,
  ) {}

  private handleError = (error: unknown, res: Response) => {
    if(error instanceof CustomError) return res.status(error.statusCode).json({ error: error.message })

    console.log(error)

    return res.status(500).json({ error: 'Internal server error' })
  }
  
  getLocations = async (req: Request, res: Response) => {
    
    const [error, getLocationsDto] = await GetLocationsDto.getLocations()
    
    if(error) return res.status(400).json({ error })

    return new GetLocations(this.locationRepository)
      .execute(getLocationsDto!)
      .then(data => res.json(data))
      .catch(error => this.handleError(error, res))
  }
}