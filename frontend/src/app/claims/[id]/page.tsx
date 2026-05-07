import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function ClaimDetailsPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1">
        <Topbar />

        <div className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">CLM-78422</h1>
              <p className="text-gray-400 mt-2">
                Auto Collision Claim • John Smith • AUTO-10293
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-white">
              Run Fraud Analysis
            </button>
          </div>

          <div className="grid grid-cols-4 gap-6 mt-10">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Claim Status</p>
              <h2 className="text-3xl font-bold text-white mt-3">In Review</h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Reserve</p>
              <h2 className="text-3xl font-bold text-white mt-3">$8,500</h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Loss Date</p>
              <h2 className="text-2xl font-bold text-white mt-3">Apr 18, 2026</h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">AI Risk Score</p>
              <h2 className="text-3xl font-bold text-orange-400 mt-3">72/100</h2>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="col-span-2 bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Claim Timeline
              </h2>

              <div className="space-y-5">
                <div className="bg-gray-950 border border-gray-800 rounded-xl p-5">
                  <p className="text-white font-semibold">First Notice of Loss Received</p>
                  <p className="text-gray-400 text-sm mt-1">Customer reported collision loss.</p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-5">
                  <p className="text-white font-semibold">Adjuster Assigned</p>
                  <p className="text-gray-400 text-sm mt-1">Claim assigned for review and coverage verification.</p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-5">
                  <p className="text-white font-semibold">AI Fraud Review Triggered</p>
                  <p className="text-gray-400 text-sm mt-1">Pattern matched elevated risk indicators.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-6">
                AI Claim Insights
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
                  <p className="text-gray-300">
                    Claim severity is higher than average for this policy profile.
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
                  <p className="text-gray-300">
                    Loss occurred within 30 days of policy endorsement.
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
                  <p className="text-gray-300">
                    Recommend adjuster review before settlement authorization.
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
