import { createValidate } from 'pangea-server';
import { AppRouter } from '@/router/app-router.class';
import { PersonValidator as Validator } from './person.validators';
import { PersonController as Controller } from './person.controllers';

export function setPersonRoutes(app: App) {
  const router = new AppRouter(app, '/persons');
  // get
  router.get('/:id', createValidate<Validator['IdParamsRoute']>(), Controller.GetPerson);
  router.get('', createValidate<Validator['GetPersons']>(), Controller.GetPersons);
  // post
  router.post('', createValidate<Validator['CreatePerson']>(), Controller.CreatePerson);
  // put
  router.put('/:id', createValidate<Validator['UpdatePerson']>(), Controller.UpdatePerson);
  // delete
  router.delete('/:id', createValidate<Validator['IdParamsRoute']>(), Controller.DeletePerson);
}
