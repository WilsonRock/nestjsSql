import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CommerceGames } from './commerce-games.entity';

@Controller('commerce-games')
export class CommerceGamesController {

  @Get()
  getCommerceGames(): CommerceGames[] {
    return;
  }

  @Get(':id')
  getCommerceGame(@Param('id') id: string): CommerceGames {
    return;
  }

  @Post()
  createCommerceGame(@Body() message: string): void {
    return;
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body() message: string): CommerceGames {
    return;
  }
}

