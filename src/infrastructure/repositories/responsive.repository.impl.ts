import { GetResponsivesDto, ResponsiveEntity, ResponsiveRepository, ResponsiveDatasource } from "../../domain";

export class ResponsiveRepositoryImpl implements ResponsiveRepository {

  constructor(
    private readonly datasource: ResponsiveDatasource
  ) { }

  getResponsives(getResponsiveDto: GetResponsivesDto): Promise<ResponsiveEntity[]> {
    return this.datasource.getResponsives(getResponsiveDto)
  }

}