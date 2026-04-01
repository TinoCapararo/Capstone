import { persons } from '@/modules/person/person.seed';
import { experiences } from '@/modules/experience/experience.seed';
import { advices } from '@/modules/advice/advice.seed';

export const seeds = {
  Person: persons,
  Experience: experiences,
  Advice: advices,
};
