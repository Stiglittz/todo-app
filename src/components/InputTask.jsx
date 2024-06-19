

export default function InputTask({ text, setText, onSubmit }) {
  return (
    <form className="flex flex-row gap-2 justify-center p-5" onSubmit={onSubmit}>
      <input
        name="todo"
        type="text"
        className="p-2 rounded text-black w-full max-w-screen-sm"
        placeholder="Ingresa una tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button className="bg-white text-black px-3 rounded">+ Agregar</button>
    </form>
  );
}

