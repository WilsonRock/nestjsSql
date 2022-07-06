import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Commerces } from '../commerces/commerces.entity';
import { Games } from '../games/games.entity';

@Entity()
export class CommerceGames {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Commerces, commerce => commerce.id)
  commerce_id: Commerces[];

  @OneToMany(() => Games, game => game.id)
  game_id: Games[];

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}