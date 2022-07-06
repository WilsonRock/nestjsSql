import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GamesRepository } from './games.repository';
import { Games } from './games.entity';

@Injectable()
export class GamesService {

  constructor(
    @InjectRepository(GamesRepository, 'bet_provider')
    private gamesRepository: GamesRepository
  ) {}

  async createGame(game: Games): Promise<Games> {
    game.created_at = new Date();
    game.updated_at = new Date();
    return this.gamesRepository.save(game);
  }

  async getGames(): Promise<Games[]> {
    let games = await this.gamesRepository.find();
    return games;
  }

  async getGameById(id: number): Promise<Games> {
    const game = await this.gamesRepository.findOne({where: {id: id}});
    if (!game) {
      throw new NotFoundException("Juego no encontrado")
    }
    return game;
  }

  async updateGame(game: Games, id: number): Promise<Games> {
    let gameFound = await this.gamesRepository.findOne({where: {id: id}});
    if (!gameFound) {
      throw new NotFoundException("Comercio no encontrado")
    }

    game.id = gameFound.id;
    game.updated_at = new Date();
    return this.gamesRepository.save(game);
  }
}
