import { createValidate } from 'pangea-server';
import { AppRouter } from '@/router/app-router.class';
import { ExperienceValidator as Validator } from './experience.validators';
import { ExperienceController as Controller } from './experience.controllers';

export function setExperienceRoutes(app: App) {
  const router = new AppRouter(app, '/capstone-experiences');
  // get
  router.get('/:id', createValidate<Validator['IdParamsRoute']>(), Controller.GetExperience);
  router.get('', createValidate<Validator['GetExperiences']>(), Controller.GetExperiences);
  // post
  router.post('', createValidate<Validator['CreateExperience']>(), Controller.CreateExperience);
  // put
  router.put('/:id', createValidate<Validator['UpdateExperience']>(), Controller.UpdateExperience);
  // delete
  router.delete('/:id', createValidate<Validator['IdParamsRoute']>(), Controller.DeleteExperience);
}
