import { Body, Controller, Get, Param, Patch, Post, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Commerces } from './commerces.entity';
import { CommercesService } from './commerces.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('commerces')
@UseGuards(AuthGuard)
export class CommercesController {

  constructor(private readonly commercesService: CommercesService) {}

  @Get()
  async getCommerces(@Res() res: Response) {
    const commerce = await this.commercesService.getCommerces();
    return res.status(HttpStatus.OK).json({
      message: 'OK',
      commerce
    })
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
