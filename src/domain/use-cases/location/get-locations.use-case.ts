import { JwtAdapter } from "../../../config";
import { GetLocationsDto } from "../../dtos";
import { CustomError } from "../../errors";
import { AuthRepository, LocationRepository } from "../../repositories";

interface Location {
  id: string
  name: string,
}

interface GetLocationsUseCase {
  execute(getLocationsDto: GetLocationsDto): Promise<Location>
}

export class GetLocations implements GetLocationsUseCase {

  constructor(
    private readonly locationRepository: LocationRepository,
  ) { }

  async execute(getLocationsDto: GetLocationsDto): Promise<Location> {

    const locations = await this.locationRepository.getLocations(getLocationsDto)

    return locations

  }
}