import { prisma } from '..';
import { reviewInsert } from '../types/ratings';

export async function UpdateInsertReviewQuery(input: reviewInsert) {
  return await prisma.review.upsert({
    where: {
      storeId_userId: {
        storeId: Number(input.storeId),
        userId: Number(input.userId),
      },
    },
    update: { ratings: Number(input.ratings), content: input.reviewContent?.toString() || '' },
    create: {
      storeId: Number(input.storeId),
      userId: Number(input.userId),
      ratings: Number(input.ratings),
      content: input.reviewContent?.toString() || '',
    },
  });
}

export async function DeleteReviewQuery(input: reviewInsert) {
  return await prisma.review.update({
    where: { storeId_userId: { storeId: Number(input.storeId), userId: Number(input.userId) } },
    data: {
      isDelete: true,
    },
  });
}

export async function SelectRatingQuery(condition: reviewInsert) {
  return await prisma.review.groupBy({
    by: ['storeId'],
    _avg: {
      ratings: true,
    },
    where: condition,
  });
}

export async function RestoreReviewQuery() {
  return await prisma.review.updateMany({
    data: { isDelete: false },
  });
}
