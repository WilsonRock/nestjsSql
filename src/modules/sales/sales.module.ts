import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesService } from './sales.service';
import { SalesRepository } from './sales.repository';
import { Sales } from './sales.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalesRepository, Sales], 'bet_provider')],
  controllers: [SalesController],
  providers: [SalesService]
})
export class SalesModule {}
