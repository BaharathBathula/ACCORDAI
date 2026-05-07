import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import DashboardCard from "@/components/dashboard-card";

export default function DashboardPage() {
  return (
    <main className="flex bg-black min-h-screen">
      <Sidebar />

      <section className="flex-1">
        <Topbar />

        <div className="p-8">
          <div className="grid grid-cols-4 gap-6">
            <DashboardCard
              title="Active Policies"
              value="1,284"
              description="Currently active insurance policies"
            />

            <DashboardCard
              title="Claims In Progress"
              value="86"
              description="Claims actively being processed"
            />

            <DashboardCard
              title="Renewals This Month"
              value="214"
              description="Policies approaching renewal"
            />

            <DashboardCard
              title="AI Tasks Generated"
              value="342"
              description="AI-generated operational tasks"
            />
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Agency Operations Overview
              </h2>

              <div className="h-80 rounded-xl bg-gray-950 border border-gray-800 flex items-center justify-center text-gray-500">
                Analytics & Reporting Visualization Area
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <h2 className="text-2xl font-semibold text-white mb-6">
                AI Copilot
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-950 p-4 rounded-xl border border-gray-800">
                  <p className="text-gray-300 text-sm">
                    14 policy renewals require remarketing review.
                  </p>
                </div>

                <div className="bg-gray-950 p-4 rounded-xl border border-gray-800">
                  <p className="text-gray-300 text-sm">
                    3 claims flagged for potential fraud analysis.
                  </p>
                </div>

                <div className="bg-gray-950 p-4 rounded-xl border border-gray-800">
                  <p className="text-gray-300 text-sm">
                    AI identified missing coverage opportunities for 26 customers.
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
