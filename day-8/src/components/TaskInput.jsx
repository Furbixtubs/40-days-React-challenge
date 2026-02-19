import { useState } from "react";

export default function TaskInput() {
  const [Task, setTask] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

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

  function filteredTasks() {
    return Task.filter((tasks) => {
      if (filter === "all") {
        return true;
      }
      if (filter === "active") {
        return tasks.completed === false;
      }
      if (filter === "completed") {
        return tasks.completed === true;
      }
    });
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

      <div className="flex justify-center gap-4">
        <button
          className={
            filter === "all"
              ? "bg-black text-white px-3 py-1 rounded-full text-sm transition"
              : "px-3 py-1 rounded-full text-sm transition"
          }
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={
            filter === "active"
              ? "bg-black text-white px-3 py-1 rounded-full text-sm transition"
              : "px-3 py-1 rounded-full text-sm transition"
          }
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={
            filter === "completed"
              ? "bg-black text-white px-3 py-1 rounded-full text-sm transition"
              : "px-3 py-1 rounded-full text-sm transition"
          }
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      {filteredTasks().length === 0 ? (
        <p className="text-gray-400 text-sm text-center">
          No active tasks yet. Add one above
        </p>
      ) : (
        <ul>
          {filteredTasks().map((items, index) => (
            <li key={index} className="flex justify-between items-center p-3">
              <div className="flex items-center gap-5">
                <p
                  className={
                    items.completed
                      ? "line-through text-gray-400 cursor-pointer"
                      : "text-black cursor-pointer"
                  }
                  onClick={() => handleToggle(index)}
                >
                  {items.text}
                </p>
                {items.completed && (
                  <span className="text-green-500 text-sm">Completed</span>
                )}
              </div>

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
