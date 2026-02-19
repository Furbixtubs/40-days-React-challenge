import { useState } from "react";

export default function TaskInput() {
  const [Task, setTask] = useState([]);
  const [input, setInput] = useState("");

  function clickButton() {
    if (input.trim() === "") return;

    setTask([...Task, { text: input, completed: false }]);
    setInput("");
  }

  function handleToggle(indexToToggle) {
    setTask((prev) =>
      prev.map((item, i) =>
        i === indexToToggle ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  function handleDelete(indexToDelete) {
    const newDelete = Task.filter((_, index) => index !== indexToDelete);
    setTask(newDelete);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto my-0 space-y-4">
      <p className="text-2xl font-bold text-center">Task Lists</p>

      <div className="flex gap-2">
        <input
          type="text"
          className="border rounded-lg px-4 py-2 flex-1 focus:ring-2 focus:ring-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={clickButton}
          className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 transition"
        >
          Add
        </button>
      </div>
      {Task.length === 0 ? (
        <p className="text-gray-400 text-sm text-center">
          No Tasks yet. Add one above
        </p>
      ) : (
        <ul>
          {Task.map((items, index) => (
            <li key={index} className="flex justify-between items-center p-3">
              <p
                onClick={() => handleToggle(index)}
                style={{
                  textDecoration: items.completed ? "line-through" : "none",
                  color: items.completed ? "gray" : "black",
                  cursor: "pointer",
                }}
              >
                {items.text}
              </p>
              <button
                className="text-red-500 cursor-pointer hover:underline"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
