import { Module } from '@nestjs/common';
import { StateSalesController } from './state-sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateSales } from './state-sales.entity';
import { StateSalesService } from './state-sales.service';
import { StateSalesRepository } from './state-sales.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StateSalesRepository, StateSales], 'bet_provider')],
  controllers: [StateSalesController],
  providers: [StateSalesService]
})
export class StateSalesModule {}
