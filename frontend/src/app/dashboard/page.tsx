"use client";

import ProtectedRoute from "@/components/protected-route";

import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function DashboardPage() {

  return (
    <ProtectedRoute>

      <main className="flex min-h-screen bg-black">

        <Sidebar />

        <section className="flex-1">

          <Topbar />

          <div className="p-8">

            <div className="mb-10">

              <h1 className="text-4xl font-bold text-white">
                ACCORDAI Dashboard
              </h1>

              <p className="text-gray-400 mt-2">
                AI-native insurance agency management platform
              </p>

            </div>

            <div className="grid grid-cols-4 gap-6 mb-10">

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

                <p className="text-gray-400">
                  Total Customers
                </p>

                <h2 className="text-4xl font-bold text-white mt-3">
                  2,481
                </h2>

              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

                <p className="text-gray-400">
                  Active Policies
                </p>

                <h2 className="text-4xl font-bold text-white mt-3">
                  6,920
                </h2>

              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

                <p className="text-gray-400">
                  Open Claims
                </p>

                <h2 className="text-4xl font-bold text-orange-400 mt-3">
                  184
                </h2>

              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

                <p className="text-gray-400">
                  AI Recommendations
                </p>

                <h2 className="text-4xl font-bold text-green-400 mt-3">
                  126
                </h2>

              </div>

            </div>

            <div className="grid grid-cols-3 gap-6">

              <div className="col-span-2 bg-gray-900 border border-gray-800 rounded-2xl p-6">

                <h2 className="text-2xl font-semibold text-white mb-6">
                  Agency Operations Overview
                </h2>

                <div className="h-96 bg-gray-950 border border-gray-800 rounded-xl flex items-center justify-center text-gray-500">

                  Insurance Operations Analytics Visualization

                </div>

              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

                <h2 className="text-2xl font-semibold text-white mb-6">
                  AI Insights
                </h2>

                <div className="space-y-4">

                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">

                    <p className="text-gray-300">
                      14 high-premium renewals require producer review.
                    </p>

                  </div>

                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">

                    <p className="text-gray-300">
                      AI detected possible cross-sell opportunities for commercial accounts.
                    </p>

                  </div>

                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-4">

                    <p className="text-gray-300">
                      Claims cycle time improved by 11% this quarter.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </ProtectedRoute>
  );
}
