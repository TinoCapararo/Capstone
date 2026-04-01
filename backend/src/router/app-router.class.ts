import { getAppRouter } from 'pangea-server';
// auth
import { authMap } from '@/auth/auth-map';
import { Auth } from '@/auth/auth.class';
import { accessToken } from '@/auth/access-token';

export const AppRouter = getAppRouter('1', { authMap, authCtor: Auth, accessToken });
