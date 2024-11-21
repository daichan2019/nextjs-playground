'use cache';
import TodoList from '@/app/components/todo-list';
import { unstable_cacheLife as cacheLife } from 'next/cache';

export default async function Page(): Promise<JSX.Element> {
  // cacheLife を設定することで、キャッシュの有効期限を設定できる
  cacheLife('minutes');

  return (
    <>
      <h1>キャッシュあり</h1>
      <TodoList />
    </>
  );
}
