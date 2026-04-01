import { createValidate } from 'pangea-server';
import { AppRouter } from '@/router/app-router.class';
import { CapstoneUserValidator as Validator } from './user.validators';
import { CapstoneUserController as Controller } from './user.controllers';

export function setUserRoutes(app: App) {
  const router = new AppRouter(app, '/capstone-users');
  // get
  router.get('/:id', createValidate<Validator['IdParamsRoute']>(), Controller.GetUser);
  router.get('', createValidate<Validator['GetUsers']>(), Controller.GetUsers);
  // post
  router.post('', createValidate<Validator['CreateUser']>(), Controller.CreateUser);
  // put
  router.put('/:id', createValidate<Validator['UpdateUser']>(), Controller.UpdateUser);
  // delete
  router.delete('/:id', createValidate<Validator['IdParamsRoute']>(), Controller.DeleteUser);
}
