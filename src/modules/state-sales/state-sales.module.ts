import { Module } from '@nestjs/common';
import { StateSalesController } from './state-sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateSales } from './state-sales.entity';
import { StateSalesService } from './state-sales.service';
import { ApiClientsModule } from '../api-clients/api-clients.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([StateSales], 'bet_provider'),
    ApiClientsModule
  ],
  controllers: [StateSalesController],
  providers: [StateSalesService]
})
export class StateSalesModule {}
