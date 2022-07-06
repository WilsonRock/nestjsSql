import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Rules } from './rules.entity';

@Controller('rules')
export class RulesController {
  @Get()
  getRules(): Rules[] {
    return;
  }

  @Get(':id')
  getRule(@Param('id') id: string): Rules {
    return;
  }

  @Post()
  createRule(@Body() message: string): void {
    return;
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body() message: string): Rules {
    return;
  }
}
