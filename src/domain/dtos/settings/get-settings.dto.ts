export class GetSettingsDto {

  static getSettings(): [string?, GetSettingsDto?] {

    return [undefined, new GetSettingsDto()]
  }

}