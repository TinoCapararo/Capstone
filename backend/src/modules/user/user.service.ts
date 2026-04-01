import { AppService } from '@/database/app-service.class';
import { CapstoneUserValidator as Validator } from './user.validators';
// models
import { CapstoneUser } from './user.model';

export class CapstoneUserService extends AppService {
  async getOne(id: ModelId) {
    return this.db.findOne(CapstoneUser, id);
  }
  async getMany(params: Validator['GetUsers']['query'] = {}) {
    const { page, pageSize, search } = params;
    return this.db.findManyWithCount(CapstoneUser, {
      searchFields: ['nickname', 'fullname'],
      search,
      order: { createdAt: 'desc' },
      page,
      pageSize,
    });
  }
  async createOne(params: Validator['CreateUser']['body']) {
    return this.db.insertOne(CapstoneUser, params as InsertParams<CapstoneUser>);
  }
  async updateOne(id: ModelId, params: Validator['UpdateUser']['body']) {
    return this.db.updateOne(CapstoneUser, id, params);
  }
  async deleteOne(id: ModelId) {
    return this.db.deleteOne(CapstoneUser, id);
  }
}
