import { GetLocationsDto, LocationEntity, LocationRepository, LocationsDatasource } from "../../domain";

export class LocationRepositoryImpl implements LocationRepository {

  constructor(
    private readonly datasource: LocationsDatasource
  ) { }

  getLocations(getLocationsDto: GetLocationsDto): Promise<LocationEntity[]> {
    return this.datasource.getLocations(getLocationsDto)
  }

}