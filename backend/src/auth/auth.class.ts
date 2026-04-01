import { BaseAuth, AuthUsers } from 'pangea-server';
import type { AuthMap } from './auth-map';

export class Auth extends BaseAuth<AuthMap> {
  constructor(authUsers: AuthUsers<AuthMap>) {
    super(authUsers);
  }
}
