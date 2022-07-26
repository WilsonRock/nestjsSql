import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiClients } from './api-clients.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ApiClientsService {

  constructor(
    @InjectRepository(ApiClients, 'bet_provider')
    private readonly apiClientsRepository: Repository<ApiClients>,
  ) {}

  async validate(appKey: string, appToken: string) {
    const apiClient = await this.apiClientsRepository.findOne({ where: { api_key: appKey }});

    if(apiClient && await bcrypt.compare(appToken, apiClient.api_token)) {
      return true;
    }
    return false;
  }

  async generateApiClient(apiClient: ApiClients) {
    const salt = await bcrypt.genSalt();
    const token = this.generateRandom(50);

    apiClient.api_key = `betappkey-${apiClient.commerce}-${this.generateRandom(6)}`
    apiClient.api_token = await bcrypt.hash(token, salt);
    apiClient.created_at = new Date();
    apiClient.updated_at = new Date();
    this.apiClientsRepository.save(apiClient);
    return { ApiKey: apiClient.api_key, ApiToken: token };
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
