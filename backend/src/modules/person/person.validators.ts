import { BaseValidator, Val } from 'pangea-server';

export interface PersonBase {
  nickname: Val.MaxLen<'short'>;
  fullname: Val.MaxLen<'short'>;
}

export interface PersonValidator extends BaseValidator {
  GetPersons: { query?: Val.GetManyQueryBase };
  CreatePerson: { body: PersonBase };
  UpdatePerson: { params: Val.IdParams; body: PersonBase };
}
