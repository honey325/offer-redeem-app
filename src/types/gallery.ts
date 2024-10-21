export interface galleryInsert {
  storeId: number;
  contentType: number;
  content: number;
}
export interface photoInsert {
  path: string;
  userId: number;
  originalName: string;
  fileSize: string;
}

export interface photoresult {
  id: number;
  path: string;
  userId: number;
  originalName: string;
  fileSize: string;
  isDelete: boolean;
  createAt: Date;
  updateAt: Date | null;
  deletedAt: Date | null;
}

export interface galleryResult {
  id: number;
  storeId: number;
  contentType: number;
  content: number | null;
  isDelete: boolean;
  createAt: Date;
  updateAt: Date;
  deletedAt: Date | null;
  contentDetail?: photoresult;
}
