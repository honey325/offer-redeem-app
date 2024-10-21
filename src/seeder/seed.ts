import { PrismaClient } from '@prisma/client';
import { userResult } from '../types/user';
import { v4 as uuidV4 } from 'uuid';
import argon2 from 'argon2';
const prisma = new PrismaClient();

async function seed() {
  // const result = prisma.category.createMany({
  //   data: [{ name: 'food'}, { name: 'beauty' }, { name: 'health' }, { name: 'fashion' }],
  // })
  const categories: string[] = ['food', 'beauty', 'health', 'fashion'];
  const subcategories: { [index: string]: string[] } = {
    food: ['punjabi', 'chinese', 'fastfood', 'bakery', 'gujarati'],
    beauty: ['skincare', 'salon', 'spa'],
    health: ['hospitals', 'medical stores', 'gym'],
    fashion: ['garments', 'jwellery', 'traditionals'],
  };
  for (const key of categories) {
    const sub: Array<{ name: string }> = [];
    for (const item of subcategories[key]) {
      sub.push({ name: item });
    }

    const result = await prisma.category.upsert({
      where: { name: key },
      update: {},
      create: {
        name: key,
        subcategory: {
          create: sub,
        },
      },
    });
  }

  // for (const key in selectMasterObj) {

  await InsertOptionMaster('role');
  await InsertOptionMaster('galleryContentType');
  // }
  const salt: string = uuidV4();
  const pwd: string = await argon2.hash(salt + 'admin');
  const result: userResult = (await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {},
    create: {
      email: 'admin@gmail.com',
      fname: 'admin',
      lname: 'abc',
      roleId: 1,
      contact: '1234567894',
      activationCode: 'none',
      password: pwd,
      salt: salt,
    },
  })) as userResult;
}

seed();

async function InsertOptionMaster(key: string) {
  const selectMasterObj: { [index: string]: { key: string; value: string }[] } = {
    role: [
      { key: 'admin', value: 'Admin' },
      { key: 'owner', value: 'Store Owner' },
      { key: 'user', value: 'user' },
    ],
    galleryContentType: [
      { key: 'photo', value: 'Photo' },
      { key: 'video', value: 'Video' },
    ],
  };
  await prisma.$transaction(async (tx) => {
    const result = await tx.selectMaster.upsert({
      where: { key: key },
      update: {},
      create: {
        key: key,
        value: key,
        optionMaster: {
          create: selectMasterObj[key],
        },
      },
    });
  });
}
