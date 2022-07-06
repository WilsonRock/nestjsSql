import { Module } from '@nestjs/common';
import { RafflesController } from './raffles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Raffles } from './raffles.entity';
import { RafflesService } from './raffles.service';
import { RafflesRepository } from './raffles.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RafflesRepository, Raffles], 'bet_provider')],
  controllers: [RafflesController],
  providers: [RafflesService]
})
export class RafflesModule {}
