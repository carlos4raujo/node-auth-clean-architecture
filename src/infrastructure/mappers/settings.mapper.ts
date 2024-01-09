import { SettingsEntity } from "../../domain";

export class SettingsMapper {

  static settingsEntityFromObject(object: { [key: string]: any }) {

    const { key, value } = object

    return new SettingsEntity(key, value)

  }

}