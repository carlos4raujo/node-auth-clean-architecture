import { GetSettingsDto } from "../dtos";
import { SettingsEntity } from "../entities";

export abstract class SettingsRepository {

  abstract getSettings(getSettingsDto: GetSettingsDto): Promise<SettingsEntity[]>

}