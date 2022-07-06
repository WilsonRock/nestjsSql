import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { StateSales } from './state-sales.entity';

@Controller('state-sales')
export class StateSalesController {
  @Get()
  getStateSales(): StateSales[] {
    return;
  }

  @Get(':id')
  getStateSale(@Param('id') id: string): StateSales {
    return;
  }

  @Post()
  createStateSale(@Body() message: string): void {
    return;
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body() message: string): StateSales {
    return;
  }
}
