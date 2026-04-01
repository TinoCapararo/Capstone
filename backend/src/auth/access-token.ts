import { AccessToken } from 'pangea-server';
// helpers
import { getEnvStr } from 'pangea-server/helpers';

const secretPrivateKey = getEnvStr('ACCESS_TOKEN_SECRET_PRIVATE_KEY');
export const accessToken = new AccessToken(secretPrivateKey);
