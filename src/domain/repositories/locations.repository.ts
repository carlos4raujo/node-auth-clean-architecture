import { GetLocationsDto } from "../dtos";
import { LocationEntity } from "../entities";

export abstract class LocationRepository {

  abstract getLocations(getLocationsDto: GetLocationsDto): Promise<LocationEntity[]>

}