import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.todo.createMany({
    data: [
      { title: 'todo1', description: 'This is the todo1', isCompleted: false },
      { title: 'todo2', description: 'This is the todo2', isCompleted: true },
      { title: 'todo3', description: 'This is the todo3', isCompleted: false },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
