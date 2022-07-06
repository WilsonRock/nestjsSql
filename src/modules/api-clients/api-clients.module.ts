import { Module } from '@nestjs/common';
import { ApiClientsController } from './api-clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiClientsService } from './api-clients.service';
import { ApiClients } from './api-clients.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApiClients], 'bet_provider')],
  controllers: [ApiClientsController],
  providers: [ApiClientsService]
})
export class ApiClientsModule {}
