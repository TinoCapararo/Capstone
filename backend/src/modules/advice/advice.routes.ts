import { createValidate } from 'pangea-server';
import { AppRouter } from '@/router/app-router.class';
import { AdviceValidator as Validator } from './advice.validators';
import { AdviceController as Controller } from './advice.controllers';

export function setAdviceRoutes(app: App) {
  const router = new AppRouter(app, '/capstone-advices');
  // get
  router.get('/:id', createValidate<Validator['IdParamsRoute']>(), Controller.GetAdvice);
  router.get('', createValidate<Validator['GetAdvices']>(), Controller.GetAdvices);
  // post
  router.post('', createValidate<Validator['CreateAdvice']>(), Controller.CreateAdvice);
  // put
  router.put('/:id', createValidate<Validator['UpdateAdvice']>(), Controller.UpdateAdvice);
  // delete
  router.delete('/:id', createValidate<Validator['IdParamsRoute']>(), Controller.DeleteAdvice);
}
