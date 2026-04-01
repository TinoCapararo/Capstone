import { BaseValidator, Val } from 'pangea-server';

export interface AdviceBase {
  experienceId: Val.Id;
  content: Val.Str;
  type: Val.MaxLen<'short'>;
}

export interface AdviceValidator extends BaseValidator {
  GetAdvices: { query?: Val.GetManyQueryBase & { experienceId?: Val.IdOptional } };
  CreateAdvice: { body: AdviceBase };
  UpdateAdvice: { params: Val.IdParams; body: AdviceBase };
}
