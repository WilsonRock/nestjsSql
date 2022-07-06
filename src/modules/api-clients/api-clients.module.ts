import { Module } from '@nestjs/common';
import { ApiClientsController } from './api-clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiClientsService } from './api-clients.service';
import { ApiClientsRepository } from './api-clients.repository';
import { ApiClients } from './api-clients.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApiClientsRepository, ApiClients], 'bet_provider')],
  controllers: [ApiClientsController],
  providers: [ApiClientsService]
})
export class ApiClientsModule {}
