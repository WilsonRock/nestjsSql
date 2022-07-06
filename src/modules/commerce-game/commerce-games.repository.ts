import { EntityRepository, Repository } from "typeorm";
import { CommerceGames } from './commerce-games.entity';

@EntityRepository(CommerceGames)
export class CommerceGamesRepository extends Repository<CommerceGames> {

}