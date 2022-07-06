import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CommerceGames } from './commerce-games.entity';
import { CommerceGamesService } from './commerce-games.service';

@Controller('commerce-games')
export class CommerceGamesController {

  constructor(private readonly commerceGamesService: CommerceGamesService) {}

  @Get()
  getCommerceGames(): Promise<CommerceGames[]> {
    return this.commerceGamesService.getCommerceGames();
  }

  @Get(':id')
  getCommerceGame(@Param('id') id: number): Promise<CommerceGames> {
    return this.commerceGamesService.getCommerceGameById(id);
  }

  @Post()
  createCommerceGame(@Body() commerceGame: CommerceGames): Promise<CommerceGames> {
    return this.commerceGamesService.createCommerceGame(commerceGame);
  }

  @Patch(':id')
  updateTuit(@Param('id') id: number, @Body() commerceGames: CommerceGames): Promise<CommerceGames> {
    return this.commerceGamesService.updateCommerceGames(commerceGames, id);
  }
}

