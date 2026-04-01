import { BaseValidator, Val } from 'pangea-server';

export interface AdviceBase {
  personId: Val.Id;
  experienceId: Val.Id | null;
  type: Val.MaxLen<'short'>;
  content: Val.Str;
}

export interface AdviceValidator extends BaseValidator {
  GetAdvices: { query?: Val.GetManyQueryBase & { personId?: Val.IdOptional; experienceId?: Val.IdOptional } };
  CreateAdvice: { body: AdviceBase };
  UpdateAdvice: { params: Val.IdParams; body: AdviceBase };
}
