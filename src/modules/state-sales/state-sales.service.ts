import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateSales } from './state-sales.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StateSalesService {

  constructor(
    @InjectRepository(StateSales, 'bet_provider')
    private readonly stateSalesRepository: Repository<StateSales>
  ) {}

  async createStateSales(stateSale: StateSales): Promise<StateSales> {
    stateSale.created_at = new Date();
    stateSale.updated_at = new Date();
    return this.stateSalesRepository.save(stateSale);
  }

  async getStateSales(): Promise<StateSales[]> {
    return await this.stateSalesRepository.find();
  }

  async getStateSaleById(id: number): Promise<StateSales> {
    const stateSale = await this.stateSalesRepository.findOne({where: {id: id}});
    if (!stateSale) {
      throw new NotFoundException("Estado de venta no encontrado")
    }
    return stateSale;
  }

  async updateStateSale(stateSale: StateSales, id: number): Promise<StateSales> {
    const stateSaleFound = await this.stateSalesRepository.findOne({where: {id: id}});
    
    if (!stateSaleFound) {
      throw new NotFoundException("Estado de venta no encontrado")
    }

    stateSale.id = stateSaleFound.id;
    stateSale.updated_at = new Date();
    return this.stateSalesRepository.save(stateSale);
  }
}
