"use client";

import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

const policies = [
  {
    id: 1,
    policyNumber: "AUTO-10293",
    customer: "John Smith",
    line: "Personal Auto",
    carrier: "Progressive",
    premium: "$1,450",
    status: "Active",
    renewal: "Jul 01, 2026"
  },
  {
    id: 2,
    policyNumber: "GL-88210",
    customer: "ABC Logistics LLC",
    line: "General Liability",
    carrier: "Travelers",
    premium: "$18,600",
    status: "Active",
    renewal: "Sep 15, 2026"
  },
  {
    id: 3,
    policyNumber: "PROP-44091",
    customer: "ABC Logistics LLC",
    line: "Commercial Property",
    carrier: "The Hartford",
    premium: "$24,200",
    status: "Renewal Review",
    renewal: "Jun 10, 2026"
  }
];

export default function PoliciesPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1">
        <Topbar />

        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white">
                Policies
              </h1>

              <p className="text-gray-400 mt-2">
                Manage policy lifecycle, renewals, carriers, and coverage intelligence
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-white font-medium">
              Add Policy
            </button>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-950">
                <tr>
                  <th className="text-left text-gray-400 p-5">Policy #</th>
                  <th className="text-left text-gray-400 p-5">Customer</th>
                  <th className="text-left text-gray-400 p-5">Line</th>
                  <th className="text-left text-gray-400 p-5">Carrier</th>
                  <th className="text-left text-gray-400 p-5">Premium</th>
                  <th className="text-left text-gray-400 p-5">Renewal</th>
                  <th className="text-left text-gray-400 p-5">Status</th>
                </tr>
              </thead>

              <tbody>
                {policies.map((policy) => (
                  <tr
                    key={policy.id}
                    className="border-t border-gray-800 hover:bg-gray-800 transition-all"
                  >
                    <td className="p-5 text-white">{policy.policyNumber}</td>
                    <td className="p-5 text-gray-300">{policy.customer}</td>
                    <td className="p-5 text-gray-300">{policy.line}</td>
                    <td className="p-5 text-gray-300">{policy.carrier}</td>
                    <td className="p-5 text-gray-300">{policy.premium}</td>
                    <td className="p-5 text-gray-300">{policy.renewal}</td>
                    <td className="p-5">
                      <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {policy.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white">
                Renewal Intelligence
              </h2>
              <p className="text-gray-400 mt-4">
                AI identified 14 policies needing remarketing review this month.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white">
                Coverage Gaps
              </h2>
              <p className="text-gray-400 mt-4">
                26 customer accounts may have missing or underinsured coverage.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white">
                Carrier Performance
              </h2>
              <p className="text-gray-400 mt-4">
                Travelers and Progressive show strongest retention performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
