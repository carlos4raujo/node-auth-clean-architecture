import LocationModel from "../../data/mysql/models/location.model";
import { CustomError, LocationEntity, LocationDatasource } from "../../domain";
import { LocationMapper } from "../mappers/location.mapper";

export class LocationDatasourceImpl implements LocationDatasource {

  async getLocations(): Promise<LocationEntity[]> {
    try {

      const locations = await LocationModel.findAll()

      return locations.map(LocationMapper.locationEntityFromObject)

    }catch(error) {

      if(error instanceof CustomError) {
        throw error
      }

      throw CustomError.internalError()

    }

  }
}