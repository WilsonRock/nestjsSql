import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { Raffles } from './raffles.entity';
import { RafflesService } from './raffles.service';

@Controller('raffles')
//@UseGuards(AuthGuard)
export class RafflesController {

  constructor(private readonly rafflesService: RafflesService) {}

  @Get()
  getRaffles(): Promise<Raffles[]> {
    return this.rafflesService.getRaffles();
  }

  @Get(':id')
  getRaffle(@Param('id') id: number): Promise<Raffles> {
    return this.rafflesService.getRaffleById(id);
  }

  @Post()
  createRaffle(@Body() raffle: Raffles): Promise<Raffles> {
    return this.rafflesService.createRaffles(raffle);
  }

  @Patch(':id')
  updateTuit(@Param('id') id: number, @Body() raffle: Raffles): Promise<Raffles> {
    return this.rafflesService.updateRaffle(raffle, id);
  }
}
