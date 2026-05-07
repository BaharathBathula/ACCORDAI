export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        ACCORDAI Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">
            Active Policies
          </h2>

          <p className="text-4xl mt-4">
            1,284
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">
            Claims In Progress
          </h2>

          <p className="text-4xl mt-4">
            86
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold">
            AI Tasks Generated
          </h2>

          <p className="text-4xl mt-4">
            342
          </p>
        </div>
      </div>
    </main>
  );
}
