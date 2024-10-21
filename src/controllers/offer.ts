import { Request, Response } from 'express';
import { addOfferInStore, getAllOffers, updateOfferInStore } from '../service/offer';
import { v4 as uuidv4 } from 'uuid';
import { stringNumObject, stringObject } from '../types/general';

export async function addOffer(req: Request, res: Response) {
  try {
    const body: stringObject = req.body;
    const result = await addOfferInStore({
      offerName: body.offerName,
      description: body.description,
      storeId: Number(body.storeId),
      code: uuidv4(),
      startDate: new Date(body.startDate),
      endDate: new Date(body.endDate),
      tNc: body.tNc,
    });
    res.status(200).json('Offer Successfully Added');
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export async function updateOffer(req: Request, res: Response) {
  try {
    const body: stringObject = req.body;
    const result = await updateOfferInStore(
      { storeId: Number(body.storeId), offerId: Number(body.offerId), isDelete: false },
      {
        startDate: new Date(body.startDate),
        endDate: new Date(body.endDate),
        tNc: body.tNc,
      },
    );
    if (result) {
      res.status(200).json('offer Updated successfully');
    } else {
      res.status(200).json(`no offer found`);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export async function deleteOffer(req: Request, res: Response) {
  try {
    const body: stringObject = req.body;
    const result = await updateOfferInStore(
      { storeId: Number(body.storeId), offerId: Number(body.offerId) },
      { isDelete: true, deletedAt: new Date() },
    );
    if (result) {
      res.status(200).json('offer Deleted Successfully');
    } else {
      res.status(200).json(`no offer found`);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
export async function getOffersByStore(req: Request, res: Response) {
  try {
    // (req.params.id)
    const input: stringNumObject = isNaN(parseInt(req.params.id))
      ? { isDelete: false }
      : { storeId: Number(req.params.id), isDelete: false };

    const result = await getAllOffers(input);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
