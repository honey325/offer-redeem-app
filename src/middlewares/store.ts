import { NextFunction, Request, Response } from 'express';
import { userResult } from '../types/user';
import Joi from 'joi';
import { error } from 'console';
// import { Key } from "readline";

const validation = Joi.object({
  id: Joi.number(),
  name: Joi.string(),
  about: Joi.string(),
  contact: Joi.string().regex(/^[0-9]{10}$/),
  userId: Joi.number(),
  location: Joi.string(),
  categoryId: Joi.string(),
});

export const storeValidation = (req: Request, res: Response, next: NextFunction) => {
  const userObj: userResult = req.body;
  const data = validation.validate(userObj);
  if (data.error == undefined) {
    next();
  } else {
    return res.status(400).json({ 'Something Went Wrong ': data.error.message });
  }
};
