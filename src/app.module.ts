import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommercesModule } from './modules/commerces/commerces.module';
import { SalesModule } from './modules/sales/sales.module';
import { GamesModule } from './modules/games/games.module';
import { StateSalesModule } from './modules/state-sales/state-sales.module';
import { RulesModule } from './modules/rules/rules.module';
import { RafflesModule } from './modules/raffles/raffles.module';
import { CommerceGamesModule } from './modules/commerce-game/commerce-games.module';
import { ApiClientsModule } from './modules/api-clients/api-clients.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    name: 'bet_provider',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'bet_provider',
    autoLoadEntities: true,
    synchronize: true
  }), CommercesModule, SalesModule, GamesModule, StateSalesModule, RulesModule, RafflesModule, CommerceGamesModule, ApiClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
