import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Games } from './games.entity';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {

  constructor(private readonly gamesService: GamesService) {}

  @Get()
  getGames(): Promise<Games[]> {
    return this.gamesService.getGames();
  }

  @Get(':id')
  getGame(@Param('id') id: number): Promise<Games> {
    return this.gamesService.getGameById(id);
  }

  @Post()
  createGame(@Body() game: Games): Promise<Games> {
    return this.gamesService.createGame(game);
  }

  @Patch(':id')
  updateTuit(@Param('id') id: number, @Body() game: Games): Promise<Games> {
    return this.gamesService.updateGame(game, id);
  }
}
