import { Module } from '@nestjs/common';
import { RafflesController } from './raffles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Raffles } from './raffles.entity';
import { RafflesService } from './raffles.service';
import { ApiClientsModule } from '../api-clients/api-clients.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Raffles], 'bet_provider'),
    ApiClientsModule
  ],
  controllers: [RafflesController],
  providers: [RafflesService]
})
export class RafflesModule {}
