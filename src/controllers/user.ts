import { Request, Response } from 'express';
import { userResult } from '../types/user';
import { userSelectQuery, userUpdateQuery, userinsertQuery } from '../helper/user';
import argon2 from 'argon2';
import { v4 as uuidV4 } from 'uuid';
import { User, assertFunction, stringObject } from '../types/general';

export async function userSelect(req: Request, res: Response) {
  try {
    const result: userResult[] = await userSelectQuery({ isDelete: false });
    res.status(200).json(result);
  } catch (error: string | Error | unknown) {
    console.log(error);
    res.json(error);
  }
}

export async function userAdd(req: Request, res: Response) {
  try {
    const body: stringObject = req.body;
    const salt: string = uuidV4();
    const hash = await argon2.hash(body.pwd + salt);
    const result: userResult = await userinsertQuery({
      email: body.email?.toString(),
      fname: body.fname?.toString(),
      lname: body.lname?.toString(),
      contact: body.contact?.toString(),
      activationCode: 'code',
      roleId: Number(body.roleId),
      password: hash,
      salt:salt
    });

    res.status(200).json({
      msg: 'user Created Successfully',
      link: `you can login now`,
    });
  } catch (error: string | Error | unknown) {
    console.log(error);
    res.json(error);
  }
}

export async function userUpdate(req: Request, res: Response) {
  try {
    assertFunction(req);
    const body: stringObject = req.body;
    const user: User = req.user;
    const result: { count: number } = await userUpdateQuery(
      { id: Number(user.id) },
      {
        email: body.email?.toString(),
        fname: body.fname?.toString(),
        lname: body.lname?.toString(),
        contact: body.contact?.toString(),
      },
    );
    if (result.count > 0) {
      res.status(200).json(`user updated Successfully of ${body.id}`);
    } else {
      res.status(200).json(`no user found for ${body.id}`);
    }
  } catch (error: string | Error | unknown) {
    console.log(error);
    res.json(error);
  }
}

export async function userDelete(req: Request, res: Response) {
  try {
    const id: number = Number(req.query.id);
    const result: { count: number } = await userUpdateQuery({ id: id }, { isDelete: true, deletedAt: new Date() });
    if (result.count > 0) {
      res.status(200).json('user Deleted Successfully');
    } else {
      res.status(200).json(`no user found for ${req.body.id}`);
    }
  } catch (error: string | Error | unknown) {
    console.log(error);
    res.json(error);
  }
}
