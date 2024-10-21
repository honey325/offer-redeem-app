import { storeResult } from './store';

export interface userResult {
  id?: number;
  email?: string;
  fname?: string;
  lname?: string;
  contact?: string;
  password?: string;
  roleId?: number;
  activationCode?: string;
  salt?: string;
  isActive?: boolean;
  createAt?: Date;
  updateAt?: Date;
  deletedAt?: Date;
  isDelete?: boolean;
}
