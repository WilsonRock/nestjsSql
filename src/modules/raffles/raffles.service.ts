import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Raffles } from './raffles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RafflesService {

  constructor(
    @InjectRepository(Raffles, 'bet_provider')
    private readonly rafflesRepository: Repository<Raffles>
  ) {}

  async createRaffles (raffle: Raffles): Promise<Raffles> {
    raffle.created_at = new Date();
    raffle.updated_at = new Date();
    return this.rafflesRepository.save(raffle);
  }

  async getRaffles(): Promise<Raffles[]> {
    return await this.rafflesRepository.find();
  }

  async getRaffleById(id: number): Promise<Raffles> {
    const raffle = await this.rafflesRepository.findOne({where: {id: id}});
    if (!raffle) {
      throw new NotFoundException("Sorteo no encontrado")
    }
    return raffle;
  }

  async updateRaffle(raffle: Raffles, id: number): Promise<Raffles> {
    const raffleFound = await this.rafflesRepository.findOne({where: {id: id}});
    
    if (!raffleFound) {
      throw new NotFoundException("Sorteo no encontrado")
    }

    raffle.id = raffleFound.id;
    raffle.updated_at = new Date();
    return this.rafflesRepository.save(raffle);
  }
}
