import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Games } from '../games/games.entity';

@Entity()
export class Rules {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  gain: number;

  @ManyToOne(() => Games, game => game.id, {cascade: true})
  @JoinColumn({name: 'game_id'})
  game: Games[];

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}