import { prisma } from '..';
import { stringNumObject, stringObject } from '../types/general';
import { location, storeResult } from '../types/store';

export async function getstores(): Promise<storeResult[]> {
  return (await prisma.stores.findMany({ where: { isDelete: false } })) as storeResult[];
}

export async function insertstoreQuery(input: storeResult): Promise<storeResult> {
  return (await prisma.stores.create({
    data: {
      name: input.name?.toString() || '',
      about: input.about?.toString() || '',
      contact: input.contact?.toString() || '',
      owner: Number(input.owner),
      location: input.location?.toString() || '',
      categoryId: Number(input.categoryId),
    },
  })) as storeResult;
}

export async function updatestoreQuery(condition: stringNumObject, data: object): Promise<storeResult> {
  return (await prisma.stores.updateMany({
    where: condition,
    data: data,
  })) as storeResult;
}
