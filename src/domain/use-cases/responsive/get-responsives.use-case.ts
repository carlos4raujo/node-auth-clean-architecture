import { GetResponsivesDto } from "../../dtos";
import { Responsive } from "../../interfaces";
import { ResponsiveRepository } from "../../repositories";

interface GetResponsivesUseCase {
  execute(getResponsivesDto: GetResponsivesDto): Promise<Responsive[]>
}

export class GetResponsives implements GetResponsivesUseCase {

  constructor(
    private readonly responsiveRepository: ResponsiveRepository,
  ) { }

  async execute(getResponsivesDto: GetResponsivesDto): Promise<Responsive[]> {

    const responsives = await this.responsiveRepository.getResponsives(getResponsivesDto)

    return responsives

  }
}