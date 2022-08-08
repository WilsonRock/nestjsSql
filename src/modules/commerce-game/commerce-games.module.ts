import { Module } from '@nestjs/common';
import { CommerceGamesController } from './commerce-games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommerceGamesService } from './commerce-games.service';
import { CommerceGames } from './commerce-games.entity';
import { ApiClientsModule } from '../api-clients/api-clients.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommerceGames], 'bet_provider'),
    ApiClientsModule
  ],
  controllers: [CommerceGamesController],
  providers: [CommerceGamesService]
})
export class CommerceGamesModule {}
