import { Request } from 'express';
// import { logger } from "../../logs.js";
import multer, { FileFilterCallback, Multer, StorageEngine, diskStorage } from 'multer';
import { join } from 'path';

const imageFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const fileTypeAllow: string[] = ['image/jpg', 'image/png', 'image/jpeg', 'image/JPEG', 'image/PNG', 'image/JPG'];
  const fileSize: number | undefined = Number(req.headers['content-length']) || 0;

  if (!fileTypeAllow.includes(file.mimetype)) {
    console.log('Please upload only jpg, png, jpeg');

    return cb(null, false);
  } else if (fileSize > 1000000) {
    console.log('File size should be less than 1 MB');
    return cb(null, false);
  } else {
    cb(null, true);
  }
};
const storage: StorageEngine = diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    cb(null, join(__dirname, '../../public/uploads/'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-profileimage-${file.originalname}`);
  },
});

let galleryStorage: Multer = multer({ storage: storage, fileFilter: imageFilter });

export { galleryStorage };
