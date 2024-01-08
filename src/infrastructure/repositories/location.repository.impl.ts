import { GetLocationsDto, LocationEntity, LocationRepository, LocationsDatasource } from "../../domain";

export class LocationRepositoryImpl implements LocationRepository {

  constructor(
    private readonly datasource: LocationsDatasource
  ) { }

  getLocations(registerUserDto: GetLocationsDto): Promise<LocationEntity> {
    return this.datasource.getLocations(registerUserDto)
  }

}