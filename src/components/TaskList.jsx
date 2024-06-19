
export default function TaskList({ todos, removeTodo }) {
  return (
    <div className="max-w-screen-sm w-full mx-auto p-4 flex flex-col gap-1">
      {todos.length === 0 && <p>No tienes tareas pendientes 🤷‍♂️</p>}
      {todos.length > 0 &&
        todos.map((todo, idx) => (
          <div
            key={`todo-${idx}`}
            className="bg-white/10 rounded p-4 flex flex-row justify-between select-none"
          >
            <span>{todo}</span>
            <span
              className="text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-full size-5 text-center items-center"
              onClick={() => removeTodo(idx)}
            >
              x
            </span>
          </div>
        ))}
    </div>
  );
}