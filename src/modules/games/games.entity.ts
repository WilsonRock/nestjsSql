import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Games {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  identification: string;

  @Column()
  status: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}