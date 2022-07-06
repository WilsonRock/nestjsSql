import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiClients } from './api-clients.entity';
import { ApiClientsRepository } from './api-clients.repository';

@Injectable()
export class ApiClientsService {

  constructor(
    @InjectRepository(ApiClientsRepository, 'bet_provider')
    private apiClientsRepository: ApiClientsRepository,
  ) {}

  async generateApiClient(apiClient: ApiClients): Promise<ApiClients> {
    apiClient.api_key = `betappkey-${apiClient.commerce}-${this.generateRandom(6)}`
    apiClient.api_token = this.generateRandom(20);
    apiClient.created_at = new Date();
    apiClient.updated_at = new Date();
    return this.apiClientsRepository.save(apiClient);
  }

  generateRandom(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * length));
    }
    return result;
  }
}
