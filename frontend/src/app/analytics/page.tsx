import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function AnalyticsPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1">
        <Topbar />

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white">
              Analytics & Intelligence
            </h1>

            <p className="text-gray-400 mt-2">
              AI-powered operational insights and agency analytics
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Retention Rate</p>
              <h2 className="text-4xl font-bold text-white mt-3">92%</h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Loss Ratio</p>
              <h2 className="text-4xl font-bold text-white mt-3">48%</h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">AI Opportunities</p>
              <h2 className="text-4xl font-bold text-white mt-3">126</h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Pending Tasks</p>
              <h2 className="text-4xl font-bold text-white mt-3">214</h2>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="col-span-2 bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Agency Performance Overview
              </h2>

              <div className="h-96 bg-gray-950 border border-gray-800 rounded-xl flex items-center justify-center text-gray-500">
                Claims, Premiums, Retention & Revenue Analytics Visualization
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-6">
                AI Recommendations
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
                  <p className="text-gray-300">
                    Commercial auto accounts show elevated renewal risk.
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
                  <p className="text-gray-300">
                    AI identified cross-sell opportunities for 42 accounts.
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
                  <p className="text-gray-300">
                    Claims cycle times improved by 11% this quarter.
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
