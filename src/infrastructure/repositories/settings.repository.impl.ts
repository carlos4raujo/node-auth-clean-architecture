import { GetSettingsDto, SettingsDatasource, SettingsEntity, SettingsRepository } from "../../domain";

export class SettingsRepositoryImpl implements SettingsRepository {

  constructor(
    private readonly datasource: SettingsDatasource
  ) { }

  getSettings(getSettingsDto: GetSettingsDto): Promise<SettingsEntity[]> {
    return this.datasource.getSettings(getSettingsDto)
  }

}