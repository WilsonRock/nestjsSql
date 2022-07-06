import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Commerces } from './commerces.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommercesService {

  constructor(
    @InjectRepository(Commerces, 'bet_provider')
    private commercesRepository: Repository<Commerces>
  ) {}

  async createCommerce(commerce: Commerces): Promise<Commerces> {
    commerce.created_at = new Date();
    commerce.updated_at = new Date();
    return this.commercesRepository.save(commerce);
  }

  async getCommerces(): Promise<Commerces[]> {
    return await this.commercesRepository.find();
  }

  async getCommerceById(id: number): Promise<Commerces> {
    const commerce = await this.commercesRepository.findOne({where: {id: id}});
    if (!commerce) {
      throw new NotFoundException("Comercio no encontrado")
    }
    return commerce;
  }

  async updateCommerce(commerce: Commerces, id: number): Promise<Commerces> {
    const commerceFound = await this.commercesRepository.findOne({where: {id: id}});
    
    if (!commerceFound) {
      throw new NotFoundException("Comercio no encontrado")
    }

    commerce.id = commerceFound.id;
    commerce.updated_at = new Date();
    return this.commercesRepository.save(commerce);
  }
}
