import { BaseController } from 'pangea-server';
import { ExperienceValidator as Validator } from './experience.validators';
import { ExperienceService } from './experience.service';

export abstract class ExperienceController extends BaseController {
  static async GetExperience(ctx: Ctx<Validator['IdParamsRoute']>, db: Db) {
    return new ExperienceService(db).getOne(ctx.params.id);
  }
  static async GetExperiences(ctx: Ctx<Validator['GetExperiences']>, db: Db) {
    return new ExperienceService(db).getMany(ctx.query);
  }
  static async CreateExperience(ctx: Ctx<Validator['CreateExperience']>, db: Db) {
    return new ExperienceService(db).createOne(ctx.body);
  }
  static async UpdateExperience(ctx: Ctx<Validator['UpdateExperience']>, db: Db) {
    return new ExperienceService(db).updateOne(ctx.params.id, ctx.body);
  }
  static async DeleteExperience(ctx: Ctx<Validator['IdParamsRoute']>, db: Db) {
    return new ExperienceService(db).deleteOne(ctx.params.id);
  }
}
