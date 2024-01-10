import { EmployeeModel, LocationModel, PositionModel, ResponsiveModel } from "../../data";
import { CustomError, ResponsiveDatasource, ResponsiveEntity } from "../../domain";
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
}