import { BaseController } from 'pangea-server';
import { CapstoneUserValidator as Validator } from './user.validators';
import { CapstoneUserService } from './user.service';

export abstract class CapstoneUserController extends BaseController {
  static async GetUser(ctx: Ctx<Validator['IdParamsRoute']>, db: Db) {
    return new CapstoneUserService(db).getOne(ctx.params.id);
  }
  static async GetUsers(ctx: Ctx<Validator['GetUsers']>, db: Db) {
    return new CapstoneUserService(db).getMany(ctx.query);
  }
  static async CreateUser(ctx: Ctx<Validator['CreateUser']>, db: Db) {
    return new CapstoneUserService(db).createOne(ctx.body);
  }
  static async UpdateUser(ctx: Ctx<Validator['UpdateUser']>, db: Db) {
    return new CapstoneUserService(db).updateOne(ctx.params.id, ctx.body);
  }
  static async DeleteUser(ctx: Ctx<Validator['IdParamsRoute']>, db: Db) {
    return new CapstoneUserService(db).deleteOne(ctx.params.id);
  }
}
