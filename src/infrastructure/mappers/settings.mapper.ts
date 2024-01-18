import _ from 'lodash'

import { SettingsEntity } from "../../domain";

export class SettingsMapper {

  static settingsEntityFromObject(settings: { [key: string]: any }[]) {
    
    const { referenceNumber, defaultAssigner } = settings.reduce((prev, curr) => ({ ...prev, [_.camelCase(curr.key)] : curr.value }), {})

    return new SettingsEntity(
      referenceNumber,
      defaultAssigner
    )

  }

}