import { Router } from 'express';
import { userDelete, userSelect, userUpdate } from '../controllers/user';
import { userValidation } from '../middlewares/user';

export const userrouter = Router();

userrouter.route('/').get(userSelect);
userrouter.route('/update').post(userValidation, userUpdate);
userrouter.route('/delete').get(userDelete);
