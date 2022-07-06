import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Games } from '../games/games.entity';

@Entity()
export class Rules {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany(() => Games, game => game.id)
  game_id: Games[];

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}