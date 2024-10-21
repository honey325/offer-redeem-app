import { prisma } from '..';
import { stringNumObject } from '../types/general';
import { userResult } from '../types/user';

export async function userSelectQuery(condition: stringNumObject): Promise<userResult[]> {
  return (await prisma.user.findMany({ where: condition })) as userResult[];
}

export async function userinsertQuery(input: userResult): Promise<userResult> {
  return (await prisma.user.create({
    data: {
      email: input.email?.toString() || '',
      fname: input.fname?.toString() || '',
      lname: input.lname?.toString() || null,
      contact: input.contact?.toString() || '',
      activationCode: input.activationCode?.toString() || '',
      roleId: Number(input.roleId),
      password: input.password?.toString(),
      salt: input.salt?.toString() || '',
    },
  })) as userResult;
}
export async function userUpdateQuery(condition: stringNumObject, content: object): Promise<{ count: number }> {
  return (await prisma.user.updateMany({
    where: condition,
    data: content,
  })) as { count: number };
}
