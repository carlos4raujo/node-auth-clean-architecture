import { GetLocationsDto, LocationEntity, LocationRepository, LocationDatasource } from "../../domain";

export class LocationRepositoryImpl implements LocationRepository {

  constructor(
    private readonly datasource: LocationDatasource
  ) { }

  getLocations(getLocationsDto: GetLocationsDto): Promise<LocationEntity[]> {
    return this.datasource.getLocations(getLocationsDto)
  }

}