import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesService } from './games.service';
import { Games } from './games.entity';
import { ApiClientsModule } from '../api-clients/api-clients.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Games], 'bet_provider'),
    ApiClientsModule
  ],
  controllers: [GamesController],
  providers: [GamesService]
})
export class GamesModule {}
