'use server';

import prisma from '@/app/lib/prisma';

type CreateTodo = {
  title: string;
  description: string;
  isCompleted: boolean;
};
export async function createTodo({ title, description, isCompleted }: CreateTodo) {
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      isCompleted,
    },
  });

  return todo;
}
