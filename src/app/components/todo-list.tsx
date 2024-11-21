export default async function TodoList(): Promise<JSX.Element> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`);
  const { todos, currentTime } = await res.json();

  return (
    <>
      <p>Server Time: {currentTime}</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
