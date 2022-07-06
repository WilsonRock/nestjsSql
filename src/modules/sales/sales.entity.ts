import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

  @ManyToOne(() => Commerces, commerce => commerce.id, {cascade: true})
  @JoinColumn({name: 'commerce_id'})
  commerce: Commerces[];

  @ManyToOne(() => Raffles, raffle => raffle.id, {cascade: true})
  @JoinColumn({name: 'raffle_id'})
  raffle: Raffles[];

  @ManyToOne(() => StateSales, stateSale => stateSale.id, {cascade: true})
  @JoinColumn({name: 'state_sale_id'})
  stateSale: StateSales[];

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}