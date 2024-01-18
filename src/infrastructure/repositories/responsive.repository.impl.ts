import { GetResponsivesDto, ResponsiveEntity, ResponsiveRepository, ResponsiveDatasource, CreateResponsiveDto } from "../../domain";

export class ResponsiveRepositoryImpl implements ResponsiveRepository {

  constructor(
    private readonly datasource: ResponsiveDatasource
  ) { }

  getResponsives(getResponsiveDto: GetResponsivesDto): Promise<ResponsiveEntity[]> {
    return this.datasource.getResponsives(getResponsiveDto)
  }

  createResponsive(createResponsiveDto: CreateResponsiveDto): Promise<ResponsiveEntity> {
    return this.datasource.createResponsive(createResponsiveDto)
  }

}