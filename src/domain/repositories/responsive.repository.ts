import { CreateResponsiveDto, GetResponsivesDto } from "../dtos";
import { ResponsiveEntity } from "../entities";

export abstract class ResponsiveRepository {

  abstract getResponsives(getResponsivesDto: GetResponsivesDto): Promise<ResponsiveEntity[]>
  
  abstract createResponsive(getResponsivesDto: CreateResponsiveDto): Promise<ResponsiveEntity>

}