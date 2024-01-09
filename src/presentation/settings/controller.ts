import { Request, Response } from "express"
import { CustomError, SettingsRepository, GetSettingsDto, GetSettings } from "../../domain"

export class SettingsController {

  constructor(
    private readonly settingsRepository: SettingsRepository,
  ) {}

  private handleError = (error: unknown, res: Response) => {
    if(error instanceof CustomError) return res.status(error.statusCode).json({ error: error.message })

    console.log(error)

    return res.status(500).json({ error: 'Internal server error' })
  }
  
  getSettings = async (req: Request, res: Response) => {
    
    const [error, getSettingsDto] = await GetSettingsDto.getSettings()
    
    if(error) return res.status(400).json({ error })

    return new GetSettings(this.settingsRepository)
      .execute(getSettingsDto!)
      .then(data => res.json(data))
      .catch(error => this.handleError(error, res))
  }
}