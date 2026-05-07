import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function PolicyDetailsPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1">
        <Topbar />

        <div className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">
                AUTO-10293
              </h1>

              <p className="text-gray-400 mt-2">
                Personal Auto Policy • Progressive • John Smith
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-white">
              Run AI Analysis
            </button>
          </div>

          <div className="grid grid-cols-4 gap-6 mt-10">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Premium</p>
              <h2 className="text-3xl font-bold text-white mt-3">$1,450</h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Status</p>
              <h2 className="text-3xl font-bold text-white mt-3">Active</h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Effective Date</p>
              <h2 className="text-2xl font-bold text-white mt-3">Jul 01, 2025</h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Expiration Date</p>
              <h2 className="text-2xl font-bold text-white mt-3">Jul 01, 2026</h2>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="col-span-2 bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Coverage Details
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Bodily Injury</span>
                  <span className="text-white">100/300</span>
                </div>

                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Property Damage</span>
                  <span className="text-white">$100,000</span>
                </div>

                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Comprehensive</span>
                  <span className="text-white">Included</span>
                </div>

                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Collision</span>
                  <span className="text-white">Included</span>
                </div>

                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Rental Reimbursement</span>
                  <span className="text-red-400">Missing</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Roadside Assistance</span>
                  <span className="text-red-400">Missing</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-6">
                AI Policy Insights
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
                  <p className="text-gray-300">
                    Rental reimbursement coverage is missing.
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
                  <p className="text-gray-300">
                    Roadside assistance is not included.
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
                  <p className="text-gray-300">
                    Premium should be reviewed before renewal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
