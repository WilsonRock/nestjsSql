import { EntityRepository, Repository } from "typeorm";
import { ApiClients } from './api-clients.entity';

@EntityRepository(ApiClients)
export class ApiClientsRepository extends Repository<ApiClients> {

}