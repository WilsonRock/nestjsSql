import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Sales } from './sales.entity';

@Controller('sales')
export class SalesController {
  /* @Get()
  getSales(): Sales[] {
    return;
  }

  @Get(':id')
  getSale(@Param('id') id: string): Sales {
    return;
  }

  @Post()
  createSale(@Body() message: string): void {
    return;
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body() message: string): Sales {
    return;
  } */
}
