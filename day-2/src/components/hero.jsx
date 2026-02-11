export default function Hero() {
  return (
    <main className="flex gap-6 p-6">
      {/* first profile */}
      <div className="border-2 border-gray-300 bg-blue-100 rounded-lg p-6 shadow-md w-80">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Hello from Furbix Tubs
        </h1>
        <p className="text-lg font-semibold text-gray-600 mb-4">
          I am a Frontend Developer learning React and Vite
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Click me!
        </button>
      </div>

      {/* second profile */}
      <div className="border-2 border-gray-300 bg-green-100 rounded-lg p-6 shadow-md w-80 flex gap-4 flex-col">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Hello from Furbix Tubs
        </h1>
        <p className="text-lg font-semibold text-gray-600 mb-4">
          I am a Frontend Developer learning React and Vite
        </p>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Click me!
        </button>
      </div>

      {/* third profile */}
      <div className="border-2 border-gray-300 bg-purple-100 rounded-lg p-6 shadow-md w-80">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Hello from Furbix Tubs
        </h1>
        <p className="text-lg font-semibold text-gray-600 mb-4">
          I am a Frontend Developer learning React and Vite
        </p>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          Click me!
        </button>
      </div>
    </main>
  );
}
