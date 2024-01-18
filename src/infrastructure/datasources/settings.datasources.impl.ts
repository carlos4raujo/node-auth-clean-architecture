import SettingsModel from "../../data/mysql/models/settings.model";
import { CustomError, SettingsDatasource, SettingsEntity } from "../../domain";
import { SettingsMapper } from "../mappers";

export class SettingsDatasourceImpl implements SettingsDatasource {

  async getSettings(): Promise<SettingsEntity> {
    try {

      const settings = await SettingsModel.findAll()
      

      return SettingsMapper.settingsEntityFromObject(settings)

    }catch(error) {

      if(error instanceof CustomError) {
        throw error
      }

      throw CustomError.internalError()

    }

  }
}