import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Raffles } from '../raffles/raffles.entity';
import { Commerces } from '../commerces/commerces.entity';
import { StateSales } from '../state-sales/state-sales.entity';

@Entity()
export class Sales {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  amount: number;

  @OneToMany(() => Commerces, commerce => commerce.id)
  commerce_id: Commerces[];

  @OneToMany(() => Raffles, raffle => raffle.id)
  raffle_id: Raffles[];

  @OneToMany(() => StateSales, stateSale => stateSale.id)
  stateSale_id: StateSales[];

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}