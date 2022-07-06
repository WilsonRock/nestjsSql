import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StateSales {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}