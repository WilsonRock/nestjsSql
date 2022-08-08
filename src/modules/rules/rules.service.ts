import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rules } from './rules.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RulesService {

  constructor(
    @InjectRepository(Rules, 'bet_provider')
    private readonly rulesRepository: Repository<Rules>
  ) {}

  async createRules(rule: Rules) : Promise<Rules> {
    rule.created_at = new Date();
    rule.updated_at = new Date();
    return this.rulesRepository.save(rule);
  }

  async getRules(): Promise<Rules[]> {
    return await this.rulesRepository.find();
  }

  async getRuleById(id: number): Promise<Rules> {
    const rule = await this.rulesRepository.findOne({where: {id: id}});
    if (!rule) {
      throw new NotFoundException("Regla no encontrada")
    }
    return rule;
  }

  async updateRule(rule: Rules, id: number): Promise<Rules> {
    const ruleFound = await this.rulesRepository.findOne({where: {id: id}});
    
    if (!ruleFound) {
      throw new NotFoundException("Regla no encontrada")
    }

    rule.id = ruleFound.id;
    rule.updated_at = new Date();
    return this.rulesRepository.save(rule);
  }
}
