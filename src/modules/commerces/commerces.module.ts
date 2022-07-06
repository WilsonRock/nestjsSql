import { Module } from '@nestjs/common';
import { CommercesController } from './commerces.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommercesService } from './commerces.service';
import { CommercesRepository } from './commerces.repository';
import { Commerces } from './commerces.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommercesRepository, Commerces], 'bet_provider')],
  controllers: [CommercesController],
  providers: [CommercesService]
})
export class CommercesModule {}
