import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Commerces } from './commerces.entity';
import { CommercesService } from './commerces.service';

@Controller('commerces')
export class CommercesController {

  constructor(private readonly commercesService: CommercesService) {}

  @Get()
  getCommerces(): Promise<Commerces[]> {
    return this.commercesService.getCommerces();
  }

  @Get(':id')
  getCommerce(@Param('id') id: number): Promise<Commerces> {
    return this.commercesService.getCommerceById(id);
  }

  @Post()
  createCommerce(@Body() commerce: Commerces) {
    return this.commercesService.createCommerce(commerce);
  }

  @Patch(':id')
  updateTuit(@Param('id') id: number, @Body() commerce: Commerces): Promise<Commerces> {
    return this.commercesService.updateCommerce(commerce, id);
  }
}
