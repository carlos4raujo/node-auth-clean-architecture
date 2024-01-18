import { SettingsEntity } from "../entities";
import { GetSettingsDto } from "../dtos";

export abstract class SettingsDatasource {

  abstract getSettings(getSettingsDto: GetSettingsDto): Promise<SettingsEntity>

}