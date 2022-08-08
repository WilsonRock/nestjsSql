import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { StateSales } from './state-sales.entity';
import { StateSalesService } from './state-sales.service';

@Controller('state-sales')
@UseGuards(AuthGuard)
export class StateSalesController {

  constructor(private readonly stateSalesService: StateSalesService) {}

  @Get()
  getStateSales(): Promise<StateSales[]> {
    return this.stateSalesService.getStateSales();
  }

  @Get(':id')
  getStateSale(@Param('id') id: number): Promise<StateSales> {
    return this.stateSalesService.getStateSaleById(id);
  }

  @Post()
  createStateSale(@Body() stateSale: StateSales): Promise<StateSales> {
    return this.stateSalesService.createStateSales(stateSale);
  }

  @Patch(':id')
  updateTuit(@Param('id') id: number, @Body() stateSale: StateSales): Promise<StateSales> {
    return this.stateSalesService.updateStateSale(stateSale, id);
  }
}
