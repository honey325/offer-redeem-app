import { prisma } from '..';
import { stringNumObject } from '../types/general';
import { addOffer, updateOfferData } from '../types/offer';

export async function addOfferInStore(input: addOffer) {
  return await prisma.offer.upsert({
    where: { name: input.offerName },
    update: {
      storeOffer: {
        create: {
          storeId: input.storeId,
          code: input.code,
          startDate: input.startDate,
          endDate: input.endDate,
          tNc: input.tNc,
        },
      },
    },
    create: {
      name: input.offerName,
      description: input.description,
      storeOffer: {
        create: {
          storeId: input.storeId,
          code: input.code,
          startDate: input.startDate,
          endDate: input.endDate,
          tNc: input.tNc,
        },
      },
    },
  });
}

export async function updateOfferInStore(condition: updateOfferData, data: object) {
  return await prisma.storeOffer.updateMany({
    where: { storeId: Number(condition.storeId), offerId: Number(condition.offerId) },
    data: data,
  });
}

export async function getAllOffers(input: stringNumObject) {
  return await prisma.storeOffer.findMany({
    where: input,
    select: {
      storeId: true,
      offer: true,
      code: false,
      startDate: true,
      endDate: true,
      tNc: true,
    },
  });
}
