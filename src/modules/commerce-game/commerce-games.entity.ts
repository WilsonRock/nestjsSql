import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Commerces } from '../commerces/commerces.entity';
import { Games } from '../games/games.entity';

@Entity()
export class CommerceGames {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Commerces, commerce => commerce.id, { cascade: true })
  @JoinColumn({name: 'commerce_id'})
  commerce: Commerces[];

  @ManyToOne(() => Games, game => game.id, { cascade: true })
  @JoinColumn({name: 'game_id'})
  game: Games[];

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}