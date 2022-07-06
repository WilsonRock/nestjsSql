import { EntityRepository, Repository } from "typeorm";
import { StateSales } from './state-sales.entity';

@EntityRepository(StateSales)
export class StateSalesRepository extends Repository<StateSales> {

}