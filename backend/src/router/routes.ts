import { setPersonRoutes } from '@/modules/person/person.routes';
import { setExperienceRoutes } from '@/modules/experience/experience.routes';
import { setAdviceRoutes } from '@/modules/advice/advice.routes';

export function setRoutes(app: App) {
  setPersonRoutes(app);
  setExperienceRoutes(app);
  setAdviceRoutes(app);
}
