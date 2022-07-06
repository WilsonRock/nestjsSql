import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Games } from './games.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {

  constructor(
    @InjectRepository(Games, 'bet_provider')
    private gamesRepository: Repository<Games>
  ) {}

  async createGame(game: Games): Promise<Games> {
    game.created_at = new Date();
    game.updated_at = new Date();
    return this.gamesRepository.save(game);
  }

  async getGames(): Promise<Games[]> {
    return await this.gamesRepository.find();
  }

  async getGameById(id: number): Promise<Games> {
    const game = await this.gamesRepository.findOne({where: {id: id}});
    if (!game) {
      throw new NotFoundException("Juego no encontrado")
    }
    return game;
  }

  async updateGame(game: Games, id: number): Promise<Games> {
    const gameFound = await this.gamesRepository.findOne({where: {id: id}});
    if (!gameFound) {
      throw new NotFoundException("Juego no encontrado")
    }

    game.id = gameFound.id;
    game.updated_at = new Date();
    return this.gamesRepository.save(game);
  }
}
