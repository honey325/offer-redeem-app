import { NextFunction, Request, Response } from 'express';
import { userResult } from '../types/user';
import Joi from 'joi';
import { error } from 'console';
// import { Key } from "readline";

const validation = Joi.object({
  id: Joi.number(),
  fname: Joi.string(),
  lname: Joi.string(),
  email: Joi.string().email(),
  dob: Joi.date(),
  roleId: Joi.number(),
  contact: Joi.string().length(10),
});

export const userValidation = (req: Request, res: Response, next: NextFunction) => {
  const userObj: userResult = req.body;
  const data = validation.validate(userObj);
  if (data.error == undefined) {
    next();
  } else {
    return res.status(400).json({ 'Something Went Wrong ': data.error.message });
  }
};
