import { EntityRepository, Repository } from "typeorm";
import { Sales } from './sales.entity';

@EntityRepository(Sales)
export class SalesRepository extends Repository<Sales> {

}