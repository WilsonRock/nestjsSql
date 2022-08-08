import { Module } from '@nestjs/common';
import { RulesController } from './rules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RulesService } from './rules.service';
import { Rules } from './rules.entity';
import { ApiClientsModule } from '../api-clients/api-clients.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rules], 'bet_provider'),
    ApiClientsModule
  ],
  controllers: [RulesController],
  providers: [RulesService]
})
export class RulesModule {}
