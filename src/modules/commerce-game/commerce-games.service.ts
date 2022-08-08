import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommerceGames } from './commerce-games.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommerceGamesService {

  constructor(
    @InjectRepository(CommerceGames, 'bet_provider')
    private commerceGamesRepository: Repository<CommerceGames>
  ) {}

  async createCommerceGame(commerceGame: CommerceGames): Promise<CommerceGames> {
    commerceGame.created_at = new Date();
    commerceGame.updated_at = new Date();
    return this.commerceGamesRepository.save(commerceGame);
  }

  async getCommerceGames(): Promise<CommerceGames[]> {
    return await this.commerceGamesRepository.find();
  }

  async getCommerceGameById(id: number): Promise<CommerceGames> {
    const commerceGame = await this.commerceGamesRepository.findOne({where: {id: id}});
    if (!commerceGame) {
      throw new NotFoundException("Relación comercio juego no encontrada")
    }
    return commerceGame;
  }

  async updateCommerceGames(commerceGame: CommerceGames, id: number): Promise<CommerceGames> {
    const commerceGameFound = await this.commerceGamesRepository.findOne({where: {id: id}});
    if (!commerceGameFound) {
      throw new NotFoundException("Relación comercio juego no encontrada")
    }

    commerceGame.id = commerceGameFound.id;
    commerceGame.updated_at = new Date();
    return this.commerceGamesRepository.save(commerceGame);
  }
}
