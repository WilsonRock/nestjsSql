import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiClientsService } from './api-clients.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('api-clients')
export class ApiClientsController {
  constructor(private readonly apiClientsService: ApiClientsService) {}

  @Post()
  createApiClients(@Body() apiClent) {
    return this.apiClientsService.generateApiClient(apiClent);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  deleteApiClient(@Param('id') id: number) {
    this.apiClientsService.deleteApiClient(id)
  }
}
