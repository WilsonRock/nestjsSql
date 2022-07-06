import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Commerces } from './commerces.entity';
import { CommercesRepository } from './commerces.repository';

@Injectable()
export class CommercesService {

  constructor(
    @InjectRepository(CommercesRepository, 'bet_provider')
    private commercesRepository: CommercesRepository
  ) {}

  async createCommerce(commerce: Commerces): Promise<Commerces> {
    commerce.created_at = new Date();
    commerce.updated_at = new Date();
    return this.commercesRepository.save(commerce);
  }

  async getCommerces(): Promise<Commerces[]> {
    let commerces = await this.commercesRepository.find();
    return commerces;
  }

  async getCommerceById(id: number): Promise<Commerces> {
    const commerce = await this.commercesRepository.findOne({where: {id: id}});
    if (!commerce) {
      throw new NotFoundException("Comercio no encontrado")
    }
    return commerce;
  }

  async updateCommerce(commerce: Commerces, id: number): Promise<Commerces> {
    let commerceFound = await this.commercesRepository.findOne({where: {id: id}});
    if (!commerceFound) {
      throw new NotFoundException("Comercio no encontrado")
    }

    commerce.id = commerceFound.id;
    commerce.updated_at = new Date();
    return this.commercesRepository.save(commerce);
  }
}
