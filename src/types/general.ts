import { Request } from 'express';

export interface stringObject {
  [index: string]: string;
}

export interface stringNumObject {
  [index: string]: string | number | boolean;
}

export type RequestWithUser = Request & { user: User };
export type User = {
  id: number;
  email: string;
  roleId: number;
  iat: number;
  exp: number;
};
export function assertFunction(req: Request): asserts req is RequestWithUser {
  if (!('user' in req)) {
    throw new Error('Request Does Not Contain User');
  }
}
