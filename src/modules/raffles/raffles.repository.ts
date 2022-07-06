import { EntityRepository, Repository } from "typeorm";
import { Raffles } from './raffles.entity';

@EntityRepository(Raffles)
export class RafflesRepository extends Repository<Raffles> {

}