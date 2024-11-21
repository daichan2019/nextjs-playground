import { PrismaClient } from '@prisma/client';

declare global {
  var prismaClient: PrismaClient | undefined;
}

function createPrismaClient() {
  if (process.env.NODE_ENV === 'production') {
    return new PrismaClient();
  }

  if (!global.prismaClient) {
    global.prismaClient = new PrismaClient();
  }

  return global.prismaClient;
}

const prisma = createPrismaClient();

export default prisma;
