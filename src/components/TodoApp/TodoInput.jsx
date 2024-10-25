export default function TodoInput({ currTodo, setCurrTodo, handleAddTodo }) {
  return (
    <div>
      <input
        type="text"
        value={currTodo}
        onChange={(e) => setCurrTodo(e.target.value)}
        className="border border-pink-400"
      />
      <button
        className="px-2 py-4 bg-pink-400"
        type="button"
        onClick={handleAddTodo}
      >
        submit
      </button>
    </div>
  );
}
