import { EntityRepository, Repository } from "typeorm";
import { Rules } from './rules.entity';

@EntityRepository(Rules)
export class RulesRepository extends Repository<Rules> {

}