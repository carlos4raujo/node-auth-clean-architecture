import { GetSettingsDto } from "../../dtos";
import { SettingsRepository } from "../../repositories";

interface Settings {
  key: string
  value: string,
}

interface GetSettingsUseCase {
  execute(getSettingsDto: GetSettingsDto): Promise<Settings[]>
}

export class GetSettings implements GetSettingsUseCase {

  constructor(
    private readonly settingsRepository: SettingsRepository,
  ) { }

  async execute(getSettingsDto: GetSettingsDto): Promise<Settings[]> {

    const settings = await this.settingsRepository.getSettings(getSettingsDto)

    return settings

  }
}