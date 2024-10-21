import { Router } from 'express';
import { addOffer, deleteOffer, getOffersByStore, updateOffer } from '../controllers/offer';

export const offerrouter = Router();

offerrouter.route('/select/:id?').get(getOffersByStore);
offerrouter.route('/add').post(addOffer);
offerrouter.route('/update').post(updateOffer);
offerrouter.route('/delete').post(deleteOffer);
