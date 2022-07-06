import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Raffles } from './raffles.entity';

@Controller('raffles')
export class RafflesController {
  @Get()
  getRaffles(): Raffles[] {
    return;
  }

  @Get(':id')
  getRaffle(@Param('id') id: string): Raffles {
    return;
  }

  @Post()
  createRaffle(@Body() message: string): void {
    return;
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body() message: string): Raffles {
    return;
  }
}
