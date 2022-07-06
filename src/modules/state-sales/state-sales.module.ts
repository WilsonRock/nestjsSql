import { Module } from '@nestjs/common';
import { StateSalesController } from './state-sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateSales } from './state-sales.entity';
import { StateSalesService } from './state-sales.service';

@Module({
  imports: [TypeOrmModule.forFeature([StateSales], 'bet_provider')],
  controllers: [StateSalesController],
  providers: [StateSalesService]
})
export class StateSalesModule {}
