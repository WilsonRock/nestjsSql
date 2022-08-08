import { Module } from '@nestjs/common';
import { CommercesController } from './commerces.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommercesService } from './commerces.service';
import { Commerces } from './commerces.entity';
import { ApiClientsModule } from '../api-clients/api-clients.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Commerces], 'bet_provider'),
    ApiClientsModule
  ],
  controllers: [CommercesController],
  providers: [CommercesService]
})
export class CommercesModule {}
