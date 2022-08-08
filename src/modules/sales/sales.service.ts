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

  async getWinners(winners: string) {
    const sales = await this.salesRepository.find({ where: { 
      raffle: [{id: winners['sorteo']}]
    }})

    let last_digits = [];
    let last_two_digits_order = [];
    let last_three_digits_order = [];
    let last_three_digits_disorder = [];
    let last_four_digits_order = [];
    let last_four_digits_disorder = [];

    sales.forEach(element => {

      /* Cuatro cifras en orden */
      if (element.bet_number == winners['numero']) {
        element['ganancia'] = (element.amount * 4500) //ganancia
        last_four_digits_order.push(element)
      }

      /* Tres cifras en orden */
      if (element.bet_number.slice(-3) == winners['numero'].slice(-3) &&
        !last_four_digits_order.find( x => x.id == element.id)) {
        element['ganancia'] = (element.amount * 400) //ganancia
        last_three_digits_order.push(element)
      }

      /* Cuatro cifras en desorden */
      if (element.bet_number.split('').sort().join('') == winners['numero'].split('').sort().join('') &&
        !last_three_digits_order.find( x => x.id == element.id) &&
        !last_four_digits_order.find( x => x.id == element.id)) {
        element['ganancia'] = (element.amount * 208) //ganancia
        last_four_digits_disorder.push(element)
      }

      /* Tres cifras en desorden */
      if (element.bet_number.slice(-3).split('').sort().join('') == winners['numero'].slice(-3).split('').sort().join('') &&
        !last_three_digits_order.find( x => x.id == element.id) &&
        !last_four_digits_disorder.find( x => x.id == element.id) &&
        !last_four_digits_order.find( x => x.id == element.id)) {
        element['ganancia'] = (element.amount * 83) //ganancia
        last_three_digits_disorder.push(element)
      }

      /* Dos cifras */
      if (element.bet_number.slice(-2) == winners['numero'].slice(-2) &&
        !last_three_digits_order.find( x => x.id == element.id) &&
        !last_three_digits_disorder.find( x => x.id == element.id) &&
        !last_four_digits_order.find( x => x.id == element.id) &&
        !last_four_digits_disorder.find( x => x.id == element.id)) {
        element['ganancia'] = (element.amount * 50) //ganancia
        last_two_digits_order.push(element)
      }

      /* Una cifra */
      if (element.bet_number.slice(-1) == winners['numero'].slice(-1) &&
        !last_two_digits_order.find( x => x.id == element.id) && 
        !last_three_digits_order.find( x => x.id == element.id) &&
        !last_three_digits_disorder.find( x => x.id == element.id) &&
        !last_four_digits_order.find( x => x.id == element.id) &&
        !last_four_digits_disorder.find( x => x.id == element.id)
      ) {
        element['ganancia'] = (element.amount * 5) //ganancia
        last_digits.push(element)
      }
    });

    let ganadores = [{
      "4 Cifras": last_four_digits_order,
      "3 Cifras Orden": last_three_digits_order,
      "4 Cifras Desorden": last_four_digits_disorder,
      "3 Cifras Desorden": last_three_digits_disorder,
      "2 Cifras": last_two_digits_order,
      "1 Cifra": last_digits
    }]

    return ganadores
  }
}
