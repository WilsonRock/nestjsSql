import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { Sales } from './sales.entity';
import { SalesService } from './sales.service';

@Controller('sales')
@UseGuards(AuthGuard)
export class SalesController {

  constructor(private readonly salesService: SalesService) {}

  @Get()
  getSales(): Promise<Sales[]> {
    return this.salesService.getSales();
  }

  @Get(':id')
  getSale(@Param('id') id: number): Promise<Sales> {
    return this.salesService.getSaleById(id);
  }

  @Post()
  createSale(@Body() sale: Sales): Promise<Sales> {
    return this.salesService.createSale(sale);
  }
}
