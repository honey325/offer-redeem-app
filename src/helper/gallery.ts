import { readFile } from 'fs/promises';
import { prisma } from '..';
import { galleryInsert, galleryResult, photoInsert, photoresult } from '../types/gallery';
import { stringNumObject } from '../types/general';

export async function addContentInGallery(input: galleryInsert) {
  return await prisma.gallery.create({
    data: {
      storeId: input.storeId,
      contentType: input.contentType,
      content: input.content,
    },
  });
}

export async function addPhotoInPhotoMaster(input: photoInsert): Promise<photoresult> {
  return await prisma.photomaster.create({
    data: {
      path: input.path.toString(),
      userId: Number(input.userId),
      fileSize: input.fileSize,
      originalName: input.originalName,
    },
  });
}
export async function addVideoInVideoMaster(input: photoInsert): Promise<photoresult> {
  return await prisma.videomaster.create({
    data: {
      path: input.path.toString(),
      userId: Number(input.userId),
      fileSize: input.fileSize,
      originalName: input.originalName,
    },
  });
}
export async function selectFromGallary(input: stringNumObject) {
  return await prisma.gallery.findMany({
    where: { storeId: Number(input.storeId) },
  });
}
export async function selectFromPhotoMaster(input: { ids: number[] }) {
  return await prisma.photomaster.findMany({
    where: {
      id: {
        in: input.ids,
      },
    },
    include: {
      user: { select: { fname: true, lname: true } },
    },
  });
}
export async function selectFromVideoMaster(input: { ids: number[] }) {
  return await prisma.videomaster.findMany({
    where: {
      id: {
        in: input.ids,
      },
    },
    include: {
      user: { select: { fname: true, lname: true } },
    },
  });
}
export async function deleteGalleryOp(input: {
  content: number;
  contentType: number;
}): Promise<[galleryResult, photoresult]> {
  const result1 = await prisma.gallery.update({
    where: { content_contentType: { content: input.content, contentType: input.contentType } },
    data: {
      isDelete: true,
    },
  });
  let result2: photoresult;
  if (input.contentType == 4) {
    result2 = await prisma.photomaster.update({
      where: { id: input.content },
      data: {
        isDelete: true,
      },
    });
  } else {
    result2 = await prisma.videomaster.update({
      where: { id: input.content },
      data: {
        isDelete: true,
      },
    });
  }
  return [result1, result2];
}
