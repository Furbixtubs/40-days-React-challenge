import { useState } from "react";

export default function Hero() {
  const [count, setCount] = useState(0);

  let color;
  if (count > 0) {
    color = "green";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "gray";
  }

  const increase = () => setCount(count + 1);

  const decrease = () => setCount(count - 1);

  const reset = () => setCount(0);

  return (
    <div>
      <p
        className="mb-2 font-mono text-xl font-medium"
        style={{ color: color }}
      >
        Count: {count}
      </p>
      <button
        className="bg-black text-white py-2 px-6 rounded-lg mr-3"
        onClick={increase}
      >
        Increase
      </button>
      <button
        className="bg-black text-white py-2 px-6 rounded-lg mr-3"
        onClick={decrease}
      >
        Decrease
      </button>
      <button
        className="bg-black text-white py-2 px-6 rounded-lg"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}
