import { LocationEntity } from "../entities";
import { GetLocationsDto } from "../dtos";

export abstract class LocationsDatasource {

  abstract getLocations(getLocationsDto: GetLocationsDto): Promise<LocationEntity[]>

}