import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Rules } from './rules.entity';
import { RulesService } from './rules.service';

@Controller('rules')
export class RulesController {

  constructor(private readonly rulesService: RulesService) {}

  @Get()
  getRules(): Promise<Rules[]> {
    return this.rulesService.getRules();
  }

  @Get(':id')
  getRule(@Param('id') id: number): Promise<Rules> {
    return this.rulesService.getRuleById(id);
  }

  @Post()
  createRule(@Body() rule: Rules): Promise<Rules> {
    return this.rulesService.createRules(rule);
  }

  @Patch(':id')
  updateTuit(@Param('id') id: number, @Body() rule: Rules): Promise<Rules> {
    return this.rulesService.updateRule(rule, id);
  }
}
