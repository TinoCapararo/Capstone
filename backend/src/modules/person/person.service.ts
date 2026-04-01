import { AppService } from '@/database/app-service.class';
import { PersonValidator as Validator } from './person.validators';
// models
import { Person } from './person.model';

export class PersonService extends AppService {
  async getOne(id: ModelId) {
    return this.db.findOne(Person, id);
  }
  async getMany(params: Validator['GetPersons']['query'] = {}) {
    const { page, pageSize, search } = params;
    return this.db.findManyWithCount(Person, {
      searchFields: ['nickname', 'fullname'],
      search,
      order: { createdAt: 'desc' },
      page,
      pageSize,
    });
  }
  async createOne(params: Validator['CreatePerson']['body']) {
    return this.db.insertOne(Person, params as InsertParams<Person>);
  }
  async updateOne(id: ModelId, params: Validator['UpdatePerson']['body']) {
    return this.db.updateOne(Person, id, params);
  }
  async deleteOne(id: ModelId) {
    return this.db.deleteOne(Person, id);
  }
}
