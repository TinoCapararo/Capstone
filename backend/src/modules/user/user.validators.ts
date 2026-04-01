import { BaseValidator, Val } from 'pangea-server';

export interface CapstoneUserBase {
  username: Val.MaxLen<'short'>;
  password: Val.MaxLen<'short'>;
  nickname: Val.MaxLen<'short'>;
  fullname: Val.MaxLen<'short'>;
  image: Val.MaxLen<'medium'> | null;
}

export interface CapstoneUserValidator extends BaseValidator {
  GetUsers: { query?: Val.GetManyQueryBase };
  CreateUser: { body: CapstoneUserBase };
  UpdateUser: { params: Val.IdParams; body: CapstoneUserBase };
}
