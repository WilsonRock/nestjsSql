import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Games } from '../games/games.entity';

@Entity()
export class Raffles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  date_initial: Date;

  @Column()
  date_final: Date;

  @ManyToOne(() => Games, game => game.id, {cascade: true})
  @JoinColumn({name: 'game_id'})
  game: Games[];

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}