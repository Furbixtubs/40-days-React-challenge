import "./App.css";

export default function App() {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-5 bg-blue-100 min-h-screen">
        <h1 className="text-3xl font-bold">Hello from Furbix Tubs</h1>
        <p className="text-lg font-semibold">
          I am a Frontend Developer learning React and Vite
        </p>
        <button className="px-4 py-2 bg-black text-white rounded-lg">
          Click me!
        </button>
      </div>
    </>
  );
}
