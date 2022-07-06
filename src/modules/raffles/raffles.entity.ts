import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

  @OneToMany(() => Games, game => game.id)
  game_id: Games[];

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}