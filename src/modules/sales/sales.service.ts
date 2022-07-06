import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sales } from './sales.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SalesService {

  constructor(
    @InjectRepository(Sales, 'bet_provider')
    private readonly salesRepository: Repository<Sales>
  ) {}

  async createSale(sale: Sales): Promise<Sales> {
    sale.created_at = new Date();
    sale.updated_at = new Date();
    return this.salesRepository.save(sale);
  }

  async getSales(): Promise<Sales[]> {
    return await this.salesRepository.find();
  }

  async getSaleById(id: number): Promise<Sales> {
    const sale = await this.salesRepository.findOne({where: {id: id}});
    if (!sale) {
      throw new NotFoundException("Venta no encontrada")
    }
    return sale;
  }
}
