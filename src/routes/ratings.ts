import { Router } from 'express';
import { AddUpdateReview, DeleteReview, RestoreReview, SelectRatings } from '../controllers/ratings';

export const ratingsrouter = Router();

ratingsrouter.route('/select/:id?').get(SelectRatings);
ratingsrouter.route('/addupdate').post(AddUpdateReview);
ratingsrouter.route('/delete').get(DeleteReview);
ratingsrouter.route('/restore').get(RestoreReview);
