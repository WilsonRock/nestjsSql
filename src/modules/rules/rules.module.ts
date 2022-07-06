import { Module } from '@nestjs/common';
import { RulesController } from './rules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RulesService } from './rules.service';
import { RulesRepository } from './rules.repository';
import { Rules } from './rules.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RulesRepository, Rules], 'bet_provider')],
  controllers: [RulesController],
  providers: [RulesService]
})
export class RulesModule {}
