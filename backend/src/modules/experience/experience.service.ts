import { AppService } from '@/database/app-service.class';
import { ExperienceValidator as Validator } from './experience.validators';
// models
import { Experience } from './experience.model';

export class ExperienceService extends AppService {
  async getOne(id: ModelId) {
    return this.db.findOne(Experience, id);
  }
  async getMany(params: Validator['GetExperiences']['query'] = {}) {
    const { page, pageSize, personId, search } = params;
    const where: Where<Experience> = {};
    if (personId) where.personId = personId;
    return this.db.findManyWithCount(Experience, {
      where,
      searchFields: ['context', 'suggestedAction'],
      search,
      order: { createdAt: 'desc' },
      page,
      pageSize,
    });
  }
  async createOne(params: Validator['CreateExperience']['body']) {
    return this.db.insertOne(Experience, params);
  }
  async updateOne(id: ModelId, params: Validator['UpdateExperience']['body']) {
    return this.db.updateOne(Experience, id, params);
  }
  async deleteOne(id: ModelId) {
    return this.db.deleteOne(Experience, id);
  }
}
