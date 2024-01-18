import { CreateResponsiveDto, GetResponsivesDto } from "../dtos";
import { ResponsiveEntity } from "../entities";

export abstract class ResponsiveDatasource {

  abstract getResponsives(getResponsivesDto: GetResponsivesDto): Promise<ResponsiveEntity[]>
  
  abstract createResponsive(createResponsiveDto: CreateResponsiveDto): Promise<ResponsiveEntity>

}