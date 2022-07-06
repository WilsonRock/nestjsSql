import { Body, Controller, Post } from '@nestjs/common';
import { ApiClientsService } from './api-clients.service';

@Controller('api-clients')
export class ApiClientsController {
  constructor(private readonly apiClientsService: ApiClientsService) {}

  @Post()
  createApiClients(@Body() apiClent) {
    return this.apiClientsService.generateApiClient(apiClent);
  }
}
