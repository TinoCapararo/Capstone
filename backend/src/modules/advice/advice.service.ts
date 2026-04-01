import { AppService } from '@/database/app-service.class';
import { AdviceValidator as Validator } from './advice.validators';
// helpers
import { generateIaText } from 'pangea-server/helpers';
// models
import { Advice } from './advice.model';
import { Person } from '../person/person.model';
import { Experience } from '../experience/experience.model';

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
    params.content = (await this.generateAdviceContent(params)) || '';
    return this.db.insertOne(Advice, params);
  }
  async updateOne(id: ModelId, params: Validator['UpdateAdvice']['body']) {
    params.content = (await this.generateAdviceContent(params)) || '';
    return this.db.updateOne(Advice, id, params);
  }
  async deleteOne(id: ModelId) {
    return this.db.deleteOne(Advice, id);
  }
  private async generateAdviceContent(params: Validator['CreateAdvice']['body']) {
    const person = await this.db.findOne(Person, params.personId);
    let experience = null;
    if (params.experienceId) {
      experience = await this.db.findOne(Experience, params.experienceId);
    }
    const type = params.type;
    const prompt = `
      Generate a piece of advice of type "${type}" for ${person.fullname}.
      ${experience ? `Context: ${experience.context}. Emotions: ${experience.emotions.join(', ')}.` : ''}
      Base the advice on this input: ${params.content}
    `;
    return generateIaText(prompt);
  }
}
