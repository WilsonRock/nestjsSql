import { EntityRepository, Repository } from "typeorm";
import { Commerces } from './commerces.entity';

@EntityRepository(Commerces)
export class CommercesRepository extends Repository<Commerces> {

}