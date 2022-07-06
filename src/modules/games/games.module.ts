import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesService } from './games.service';
import { GamesRepository } from './games.repository';
import { Games } from './games.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GamesRepository, Games], 'bet_provider')],
  controllers: [GamesController],
  providers: [GamesService]
})
export class GamesModule {}
