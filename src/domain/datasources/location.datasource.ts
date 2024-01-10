import { LocationEntity } from "../entities";
import { GetLocationsDto } from "../dtos";

export abstract class LocationDatasource {

  abstract getLocations(getLocationsDto: GetLocationsDto): Promise<LocationEntity[]>

}