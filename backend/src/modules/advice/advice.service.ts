import { AppService } from '@/database/app-service.class';
import { AdviceValidator as Validator } from './advice.validators';
// models
import { Advice } from './advice.model';

export class AdviceService extends AppService {
  async getOne(id: ModelId) {
    return this.db.findOne(Advice, id);
  }
  async getMany(params: Validator['GetAdvices']['query'] = {}) {
    const { page, pageSize, personId, experienceId, search } = params;
    const where: Where<Advice> = {};
    if (personId) where.personId = personId;
    if (experienceId) where.experienceId = experienceId;
    return this.db.findManyWithCount(Advice, {
      where,
      searchFields: ['content', 'type'],
      search,
      order: { createdAt: 'desc' },
      page,
      pageSize,
    });
  }
  async createOne(params: Validator['CreateAdvice']['body']) {
    return this.db.insertOne(Advice, params);
  }
  async updateOne(id: ModelId, params: Validator['UpdateAdvice']['body']) {
    return this.db.updateOne(Advice, id, params);
  }
  async deleteOne(id: ModelId) {
    return this.db.deleteOne(Advice, id);
  }
}
