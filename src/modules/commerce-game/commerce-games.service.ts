import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommerceGamesRepository } from './commerce-games.repository';
import { CommerceGames } from './commerce-games.entity';

@Injectable()
export class CommerceGamesService {

  constructor(
    @InjectRepository(CommerceGamesRepository, 'bet_provider')
    private commerceGamesRepository: CommerceGamesRepository
  ) {}

  async createCommerceGame(commerceGame: CommerceGames): Promise<CommerceGames> {
    commerceGame.created_at = new Date();
    commerceGame.updated_at = new Date();
    return this.commerceGamesRepository.save(commerceGame);
  }

  async getCommerceGame(): Promise<CommerceGames[]> {
    let commerceGames = await this.commerceGamesRepository.find();
    return commerceGames;
  }

  async getCommerceGameById(id: number): Promise<CommerceGames> {
    const commerceGame = await this.commerceGamesRepository.findOne({where: {id: id}});
    if (!commerceGame) {
      throw new NotFoundException("Relación comercio juego no encontrada")
    }
    return commerceGame;
  }

  async updateCommerceGames(commerceGame: CommerceGames, id: number): Promise<CommerceGames> {
    let commerceGameFound = await this.commerceGamesRepository.findOne({where: {id: id}});
    if (!commerceGameFound) {
      throw new NotFoundException("Comercio no encontrado")
    }

    commerceGame.id = commerceGameFound.id;
    commerceGame.updated_at = new Date();
    return this.commerceGamesRepository.save(commerceGame);
  }
}
