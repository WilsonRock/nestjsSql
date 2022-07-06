import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiClients } from './api-clients.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApiClientsService {

  constructor(
    @InjectRepository(ApiClients, 'bet_provider')
    private readonly apiClientsRepository: Repository<ApiClients>,
  ) {}

  async generateApiClient(apiClient: ApiClients): Promise<ApiClients> {
    apiClient.api_key = `betappkey-${apiClient.commerce}-${this.generateRandom(6)}`
    apiClient.api_token = this.generateRandom(50);
    apiClient.created_at = new Date();
    apiClient.updated_at = new Date();
    return this.apiClientsRepository.save(apiClient);
  }

  generateRandom(length: number) {
    let result = '';
    const characters = 'AB0CD1EF2GH3IJ4KL5MN6OP7QR8ST9UV0WXYZ';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * length));
    }
    return result;
  }
}
