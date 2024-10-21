import { NextFunction, Request, Response, Router } from 'express';
import { addInGallery, deleteFromGallery, selectGallery } from '../controllers/gallery';
// import { userProfileStorage } from '../middlewares/multer';
// import { storeImage } from '../controllers/fileupload';
import multer from 'multer';
const upload = multer({ dest: './public/data/uploads/' });

export const galleryrouter = Router();

galleryrouter.route('/select/:id').get(selectGallery);
galleryrouter.route('/add').post(
  upload.single('file'),
  addInGallery,
);
// offerrouter.route('/update').post()
galleryrouter.route('/delete').get(deleteFromGallery);
