import { Request, Response } from 'express';
import { getstores, insertstoreQuery, updatestoreQuery } from '../service/store';
import { User, assertFunction, stringNumObject, stringObject } from '../types/general';

export async function getAllstores(req: Request, res: Response) {
  try {
    const result = await getstores();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export async function insertstores(req: Request, res: Response) {
  try {
    assertFunction(req);
    const body: stringObject = req.body;
    const user: User = req.user;
    const result = await insertstoreQuery({
      name: body.name,
      about: body.about,
      contact: body.contact,
      owner: user.id,
      location: body.location,
      categoryId: Number(body.categoryId),
    });
    res.status(200).json('store Succesfully Inserted');
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export async function updatestores(req: Request, res: Response) {
  try {
    const body: stringObject = req.body;
    const result = await updatestoreQuery(
      { id: Number(body.id) },
      {
        name: body.name,
        about: body.about,
        contact: body.contact,
        location: body.location,
        categoryId: body.categoryId,
      },
    );
    if (result.id) {
      res.status(200).json(`user update successfully for ${body.id}`);
    } else {
      res.status(200).json(`no store found `);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export async function deleteStores(req: Request, res: Response) {
  try {
    const id: number = Number(req.query.id);
    const result = await updatestoreQuery(
      { id: id },
      {
        isDelete: true,
        deletedAt: new Date(),
      },
    );
    if (result.id) {
      res.status(200).json(`user deleted successfully for ${id}`);
    } else {
      res.status(200).json(`no store found `);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
