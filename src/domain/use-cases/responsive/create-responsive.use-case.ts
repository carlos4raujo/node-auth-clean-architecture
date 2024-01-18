import { CreateResponsiveDto } from "../../dtos";
import { Responsive } from "../../interfaces";
import { ResponsiveRepository } from "../../repositories";

interface CreateResponsiveUseCase {
  execute(createResponsiveDto: CreateResponsiveDto): Promise<Responsive>
}

export class CreateResponsive implements CreateResponsiveUseCase {

  constructor(
    private readonly responsiveRepository: ResponsiveRepository,
  ) { }

  async execute(createResponsiveDto: CreateResponsiveDto): Promise<Responsive> {

    const responsives = await this.responsiveRepository.createResponsive(createResponsiveDto)

    return responsives

  }
}