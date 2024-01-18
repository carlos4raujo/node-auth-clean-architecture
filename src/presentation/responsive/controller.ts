import { Request, Response } from "express"
import { CustomError, ResponsiveRepository, GetResponsivesDto, GetResponsives, CreateResponsiveDto, CreateResponsive } from "../../domain"

export class ResponsiveController {

  constructor(
    private readonly responsiveRepository: ResponsiveRepository,
  ) {}

  private handleError = (error: unknown, res: Response) => {
    if(error instanceof CustomError) return res.status(error.statusCode).json({ error: error.message })

    console.log(error)

    return res.status(500).json({ error: 'Internal server error' })
  }
  
  getResponsives = async (req: Request, res: Response) => {
    
    const [error, getResponsivesDto] = await GetResponsivesDto.getResponsives()
    
    if(error) return res.status(400).json({ error })

    return new GetResponsives(this.responsiveRepository)
      .execute(getResponsivesDto!)
      .then(data => res.json(data))
      .catch(error => this.handleError(error, res))
  }
  
  createResponsive = async (req: Request, res: Response) => {
    
    const [error, createResponsiveDto] = await CreateResponsiveDto.create(req.body)
    
    if(error) return res.status(400).json({ error })

    return new CreateResponsive(this.responsiveRepository)
      .execute(createResponsiveDto!)
      .then(data => res.json(data))
      .catch(error => this.handleError(error, res))
  }
}