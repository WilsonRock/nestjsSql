import { Module } from '@nestjs/common';
import { CommerceGamesController } from './commerce-games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommerceGamesService } from './commerce-games.service';
import { CommerceGames } from './commerce-games.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommerceGames], 'bet_provider')],
  controllers: [CommerceGamesController],
  providers: [CommerceGamesService]
})
export class CommerceGamesModule {}
