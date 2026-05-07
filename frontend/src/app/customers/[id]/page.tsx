import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function CustomerDetailsPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1">
        <Topbar />

        <div className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">
                John Smith
              </h1>

              <p className="text-gray-400 mt-2">
                Personal Lines Customer
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-white">
              Edit Account
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Account Information
              </h2>

              <div className="space-y-3 text-gray-300">
                <p>Email: john@example.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Status: Active</p>
                <p>Policies: 3</p>
              </div>
            </div>

            <div className="col-span-2 bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                AI Policy Insights
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
                  <p className="text-gray-300">
                    Missing rental reimbursement coverage identified.
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
                  <p className="text-gray-300">
                    Renewal premium increased by 12%.
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">
                  <p className="text-gray-300">
                    AI recommends policy remarketing review.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Active Policies
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">
                    Personal Auto Policy
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    Progressive • Policy #AUTO-10293
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-white font-semibold">
                    $1,450 Premium
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    Expires Jul 01, 2026
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
