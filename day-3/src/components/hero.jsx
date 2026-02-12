export default function Hero({ header, paragraph, button, bg }) {
  return (
    <main>
      <div
        className="border-2 border-gray-300 rounded-lg p-6 shadow-md w-80 flex gap-4 flex-col"
        style={{ backgroundColor: bg }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-3">{header}</h1>
        <p className="text-lg font-semibold text-gray-600 mb-4">{paragraph}</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          {button}
        </button>
      </div>
    </main>
  );
}
