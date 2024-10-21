import { Request, Response } from 'express';
import {
  addContentInGallery,
  addPhotoInPhotoMaster,
  addVideoInVideoMaster,
  deleteGalleryOp,
  selectFromGallary,
  selectFromPhotoMaster,
  selectFromVideoMaster,
} from '../service/gallery';
import { assertFunction, stringNumObject, User } from '../types/general';
import { galleryResult, photoInsert, photoresult } from '../types/gallery';

export async function addInGallery(req: Request, res: Response) {
  try {
    assertFunction(req);
    const body: stringNumObject = req.body;
    const user: User = req.user;
    const input: photoInsert = {
      path: req.file?.path.toString() || '',
      userId: Number(user.id),
      originalName: req.file?.originalname || '',
      fileSize: req.file?.size.toString() || '',
    };
    const result1: photoresult =
      Number(body.contentType) === 4 ? await addPhotoInPhotoMaster(input) : await addVideoInVideoMaster(input);

    const result2: galleryResult = await addContentInGallery({
      storeId: Number(body.storeId),
      contentType: Number(body.contentType),
      content: Number(result1.id),
    });
    res.status(200).json('content Added successfully');
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export async function selectGallery(req: Request, res: Response) {
  try {
    const id: number = Number(req.params.id);

    let galleryResult: galleryResult[] = await selectFromGallary({
      storeId: id,
    });

    const photoIds: number[] = [];
    const videoIds: number[] = [];
    let photoResult: photoresult[] = [];
    let videoResult: photoresult[] = [];
    galleryResult.forEach((ele) => {
      ele.contentType == 4 ? photoIds.push(Number(ele.content)) : videoIds.push(Number(ele.content));
    });
    if (photoIds.length !== 0) {
      photoResult = await selectFromPhotoMaster({ ids: photoIds });
    }
    if (videoIds.length !== 0) {
      videoResult = await selectFromVideoMaster({ ids: videoIds });
    }
    const summary = [];
    for (let i = 0; i < galleryResult.length; i++) {
      if (galleryResult[i].contentType == 4) {
        for (let j = 0; j < photoResult.length; j++) {
          if (galleryResult[i].content == photoResult[j].id) {
            let element = {
              ...galleryResult[i],
              contentDetail: photoResult[j],
            };
            summary.push(element);
            break;
          }
        }
      } else if (galleryResult[i].contentType == 5) {
        for (let j = 0; j < videoResult.length; j++) {
          if (galleryResult[i].content == videoResult[j].id) {
            let element = {
              ...galleryResult[i],
              contentDetail: videoResult[j],
            };
            summary.push(element);
            break;
          }
        }
      }
    }
    res.status(200).json(summary);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export async function deleteFromGallery(req: Request, res: Response) {
  try {
    const body = req.query;
    const result: [galleryResult, photoresult] = await deleteGalleryOp({
      content: Number(body.content),
      contentType: Number(body.contentType),
    });

    res.status(200).json(`content delete for ${body.content}`);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
