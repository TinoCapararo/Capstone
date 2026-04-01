import { BaseController } from 'pangea-server';
import { AdviceValidator as Validator } from './advice.validators';
import { AdviceService } from './advice.service';

export abstract class AdviceController extends BaseController {
  static async GetAdvice(ctx: Ctx<Validator['IdParamsRoute']>, db: Db) {
    return new AdviceService(db).getOne(ctx.params.id);
  }
  static async GetAdvices(ctx: Ctx<Validator['GetAdvices']>, db: Db) {
    return new AdviceService(db).getMany(ctx.query);
  }
  static async CreateAdvice(ctx: Ctx<Validator['CreateAdvice']>, db: Db) {
    return new AdviceService(db).createOne(ctx.body);
  }
  static async UpdateAdvice(ctx: Ctx<Validator['UpdateAdvice']>, db: Db) {
    return new AdviceService(db).updateOne(ctx.params.id, ctx.body);
  }
  static async DeleteAdvice(ctx: Ctx<Validator['IdParamsRoute']>, db: Db) {
    return new AdviceService(db).deleteOne(ctx.params.id);
  }
}
