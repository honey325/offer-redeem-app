import { Request, Response } from 'express';
import { userResult } from '../types/user';
import { userSelectQuery } from '../service/user';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import { stringObject } from '../types/general';

export async function login(req: Request, res: Response) {
  try {
    const body: stringObject = req.body;
    const data: userResult[] = await userSelectQuery({ email: body.email });

    if (await argon2.verify(data[0].password || '', body.pwd + data[0].salt)) {
      const token = jwt.sign(
        {
          id: data[0].id,
          email: data[0].email,
          roleId: data[0].roleId,
        },
        process.env.SECRET_KEY!,
        {
          expiresIn: '2h',
        },
      );
      res.cookie('token', token).status(200).json({
        status: 'success',
        msg: 'login sucessfully',
      });
    } else {
      res.status(200).json({
        status: 'regect',
        msg: 'something went wrong, please Login Again',
      });
    }
  } catch (err: string | Error | unknown) {
    console.log(err);
    res.json(err);
  }
}
