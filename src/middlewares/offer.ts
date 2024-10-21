import { NextFunction, Request, Response } from 'express';
import { userResult } from '../types/user';
import Joi from 'joi';

const validation = Joi.object({
  offerName: Joi.string(),
  description: Joi.string(),
  storeId: Joi.number(),
  startDate: Joi.date(),
  endDate: Joi.date(),
  tNc: Joi.string(),
  offerId: Joi.number(),
});

export const offerValidation = (req: Request, res: Response, next: NextFunction) => {
  const userObj: userResult = req.body;
  const data = validation.validate(userObj);
  if (data.error == undefined) {
    next();
  } else {
    return res.status(400).json({ 'Something Went Wrong ': data.error.message });
  }
};
