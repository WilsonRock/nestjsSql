import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesService } from './sales.service';
import { Sales } from './sales.entity';
import { ApiClientsModule } from '../api-clients/api-clients.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sales], 'bet_provider'),
    ApiClientsModule
],
  controllers: [SalesController],
  providers: [SalesService]
})
export class SalesModule {}
