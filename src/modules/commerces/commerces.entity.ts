import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Commerces {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  identification: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  country: string;

  @Column()
  status: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}