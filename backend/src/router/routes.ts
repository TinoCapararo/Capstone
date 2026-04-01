import { setUserRoutes } from '@/modules/user/user.routes';
import { setExperienceRoutes } from '@/modules/experience/experience.routes';
import { setAdviceRoutes } from '@/modules/advice/advice.routes';

export function setRoutes(app: App) {
  setUserRoutes(app);
  setExperienceRoutes(app);
  setAdviceRoutes(app);
}
