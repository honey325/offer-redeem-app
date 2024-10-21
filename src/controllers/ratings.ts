import { Request, Response } from 'express';
import { DeleteReviewQuery, RestoreReviewQuery, SelectRatingQuery, UpdateInsertReviewQuery } from '../service/ratings';
import { assertFunction, stringNumObject, User } from '../types/general';
import { reviewInsert } from '../types/ratings';

export async function AddUpdateReview(req: Request, res: Response) {
  try {
    assertFunction(req);
    const body: stringNumObject = req.body;
    const user: User = req.user;
    const result = await UpdateInsertReviewQuery({
      storeId: Number(body.storeId),
      userId: user.id,
      ratings: Number(body.ratings),
      reviewContent: body.content.toString() || '',
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export async function DeleteReview(req: Request, res: Response) {
  try {
    assertFunction(req);
    const storeId: number = Number(req.query.storeId);
    const userId: number = req.user.id;
    const result = await DeleteReviewQuery({ storeId: storeId, userId: userId });
    res.status(200).json(`Record Deleted For Store:${storeId} and user: ${userId}`);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export async function SelectRatings(req: Request, res: Response) {
  try {
    const input: reviewInsert = isNaN(parseInt(req.params.id))
      ? { isDelete: false }
      : { storeId: Number(req.params.id), isDelete: false };

    const result = await SelectRatingQuery(input);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export async function RestoreReview(req: Request, res: Response) {
  try {
    const result = await RestoreReviewQuery();


    res.status(200).json('All Records Are Restored');
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
