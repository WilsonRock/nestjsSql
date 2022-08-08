import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Commerces } from '../commerces/commerces.entity';

@Entity()
export class ApiClients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  api_key: string;

  @Column()
  api_token: string;

  @ManyToOne(() => Commerces, commerce => commerce.id, {cascade: true})
  @JoinColumn({name: 'commerce_id'})
  commerce: Commerces[];

  @Column()
  status: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}