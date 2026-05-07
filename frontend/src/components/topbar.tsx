export default function Topbar() {
  return (
    <header className="w-full bg-gray-950 border-b border-gray-800 px-8 py-5 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-white">
          Insurance Operations Dashboard
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          AI-powered agency management platform
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-gray-800 px-4 py-2 rounded-xl text-gray-300">
          AI Copilot Active
        </div>

        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
          B
        </div>
      </div>
    </header>
  );
}
