import { Router } from 'express';
import { deleteStores, getAllstores, insertstores, updatestores } from '../controllers/store';

export const storerouter = Router();

storerouter.route('/').get(getAllstores);
storerouter.route('/add').post(insertstores);
storerouter.route('/update').post(updatestores);
storerouter.route('/delete').get(deleteStores);
