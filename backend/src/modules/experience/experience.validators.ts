import { BaseValidator, Val } from 'pangea-server';

export interface ExperienceBase {
  userId: Val.Id;
  context: Val.MaxLen<'short'>;
  emotions: Val.Str[];
  dashboardData: Val.Str | null;
  insights: Val.Str | null;
  suggestedAction: Val.MaxLen<'medium'> | null;
}

export interface ExperienceValidator extends BaseValidator {
  GetExperiences: { query?: Val.GetManyQueryBase & { userId?: Val.IdOptional } };
  CreateExperience: { body: ExperienceBase };
  UpdateExperience: { params: Val.IdParams; body: ExperienceBase };
}
