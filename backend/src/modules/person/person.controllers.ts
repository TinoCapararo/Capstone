import { BaseController } from 'pangea-server';
import { PersonValidator as Validator } from './person.validators';
import { PersonService } from './person.service';

export abstract class PersonController extends BaseController {
  static async GetPerson(ctx: Ctx<Validator['IdParamsRoute']>, db: Db) {
    return new PersonService(db).getOne(ctx.params.id);
  }
  static async GetPersons(ctx: Ctx<Validator['GetPersons']>, db: Db) {
    return new PersonService(db).getMany(ctx.query);
  }
  static async CreatePerson(ctx: Ctx<Validator['CreatePerson']>, db: Db) {
    return new PersonService(db).createOne(ctx.body);
  }
  static async UpdatePerson(ctx: Ctx<Validator['UpdatePerson']>, db: Db) {
    return new PersonService(db).updateOne(ctx.params.id, ctx.body);
  }
  static async DeletePerson(ctx: Ctx<Validator['IdParamsRoute']>, db: Db) {
    return new PersonService(db).deleteOne(ctx.params.id);
  }
}
