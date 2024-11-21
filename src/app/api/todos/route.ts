import prisma from '@/app/lib/prisma';

export async function GET(): Promise<Response> {
  try {
    const res = await prisma.todo.findMany();
    const currentTime = new Date().toISOString();

    return Response.json({
      currentTime,
      todos: res,
    });
  } catch (error) {
    console.error('Error fetching todos:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
