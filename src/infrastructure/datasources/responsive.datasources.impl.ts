import { EmployeeModel, LocationModel, PositionModel, ResponsiveModel, DeviceModel, SettingsModel } from "../../data";
import { CreateResponsiveDto, CustomError, ResponsiveDatasource, ResponsiveEntity } from "../../domain";
import { ResponsiveMapper } from "../mappers/responsive.mapper";

export class ResponsiveDatasourceImpl implements ResponsiveDatasource {

  async getResponsives(): Promise<ResponsiveEntity[]> {
    try {

      const responsives = await ResponsiveModel.findAll({
        include: [
          {
            model: EmployeeModel,
            as: 'assigner',
            include: [
              { model: PositionModel },
              { model: LocationModel }
            ]
          },
          {
            model: EmployeeModel,
            as: 'receiver',
            include: [
              { model: PositionModel },
              { model: LocationModel }
            ]
          },
          {
            model: EmployeeModel,
            as: 'approver',
            include: [
              { model: PositionModel },
              { model: LocationModel }
            ]
          }
        ]
      })

      return responsives.map(ResponsiveMapper.responsiveEntityFromObject)

    } catch (error) {

      if (error instanceof CustomError) {
        throw error
      }

      throw CustomError.internalError()

    }

  }

  async createResponsive(registerUserDto: CreateResponsiveDto): Promise<ResponsiveEntity> {
    const {
      device_id,
      brand,
      serial_number,
      model,
      description,
      assigner_id,
      receiver_id,
      location_id } = registerUserDto

    try {

      const device = await DeviceModel.findOne({ where: { id: device_id } })

      if (!device) throw CustomError.badRequest("Device doesn't exist")

      const assigner = await EmployeeModel.findOne({ where: { id: assigner_id } })

      if (!assigner) throw CustomError.badRequest("Assigner doesn't exist")

      const receiver = await EmployeeModel.findOne({ where: { id: receiver_id } })

      if (!receiver) throw CustomError.badRequest("Receiver doesn't exist")

      const location = await LocationModel.findOne({ where: { id: location_id } })

      if (!location) throw CustomError.badRequest("Location doesn't exist")

      const setting = await SettingsModel.findOne({ where: { key: 'reference_number' } })

      if (!setting) throw CustomError.badRequest("Set a initial reference_number")

      const referenceNumber = +setting.getDataValue("value") + 1

      const id = `CRHT-${location.getDataValue('name')}-AXT-${device.getDataValue('code')}-${referenceNumber}`;

      const responsive = await ResponsiveModel.create({
        id,
        reference_number: referenceNumber,
        device_id,
        brand,
        serial_number,
        model,
        description,
        assigner_id,
        receiver_id,
        location_id,
      })

      await responsive.save()

      await setting.setDataValue('value', referenceNumber)

      setting.save()

      return ResponsiveMapper.responsiveEntityFromObject(responsive)

    } catch (error) {

      console.log(error)

      if (error instanceof CustomError) {
        throw error
      }

      throw CustomError.internalError()

    }

  }
}