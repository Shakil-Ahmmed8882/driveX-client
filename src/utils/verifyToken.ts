import { jwtDecode } from 'jwt-decode';

import { JwtPayload as OriginalJwtPayload } from 'jwt-decode';

interface JwtPayload extends OriginalJwtPayload {
  role?: string;
}
 
export const verifyToken = (token: string): JwtPayload => {
  return jwtDecode(token);
};
