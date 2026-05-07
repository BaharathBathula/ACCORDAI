import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

const claims = [
  {
    id: 1,
    claimNumber: "CLM-78422",
    customer: "John Smith",
    policy: "AUTO-10293",
    type: "Auto Collision",
    status: "In Review",
    reserve: "$8,500",
    date: "Apr 18, 2026"
  },
  {
    id: 2,
    claimNumber: "CLM-66109",
    customer: "ABC Logistics LLC",
    policy: "GL-88210",
    type: "General Liability",
    status: "Open",
    reserve: "$24,000",
    date: "Apr 26, 2026"
  },
  {
    id: 3,
    claimNumber: "CLM-55318",
    customer: "Sarah Johnson",
    policy: "HOME-44120",
    type: "Property Damage",
    status: "AI Review",
    reserve: "$12,750",
    date: "May 02, 2026"
  }
];

export default function ClaimsPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1">
        <Topbar />

        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white">Claims</h1>
              <p className="text-gray-400 mt-2">
                Track claims, reserves, fraud indicators, and customer claim workflows
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-white font-medium">
              Add Claim
            </button>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-10">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Open Claims</p>
              <h2 className="text-4xl font-bold text-white mt-3">86</h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">AI Flagged</p>
              <h2 className="text-4xl font-bold text-white mt-3">7</h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Total Reserves</p>
              <h2 className="text-4xl font-bold text-white mt-3">$1.2M</h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Avg Cycle Time</p>
              <h2 className="text-4xl font-bold text-white mt-3">18d</h2>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-950">
                <tr>
                  <th className="text-left text-gray-400 p-5">Claim #</th>
                  <th className="text-left text-gray-400 p-5">Customer</th>
                  <th className="text-left text-gray-400 p-5">Policy</th>
                  <th className="text-left text-gray-400 p-5">Type</th>
                  <th className="text-left text-gray-400 p-5">Reserve</th>
                  <th className="text-left text-gray-400 p-5">Date</th>
                  <th className="text-left text-gray-400 p-5">Status</th>
                </tr>
              </thead>

              <tbody>
                {claims.map((claim) => (
                  <tr
                    key={claim.id}
                    className="border-t border-gray-800 hover:bg-gray-800 transition-all"
                  >
                    <td className="p-5 text-white">{claim.claimNumber}</td>
                    <td className="p-5 text-gray-300">{claim.customer}</td>
                    <td className="p-5 text-gray-300">{claim.policy}</td>
                    <td className="p-5 text-gray-300">{claim.type}</td>
                    <td className="p-5 text-gray-300">{claim.reserve}</td>
                    <td className="p-5 text-gray-300">{claim.date}</td>
                    <td className="p-5">
                      <span className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">
                        {claim.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white">Fraud Intelligence</h2>
              <p className="text-gray-400 mt-4">
                AI detected 7 claims requiring additional review based on severity, timing, and historical patterns.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white">Reserve Monitoring</h2>
              <p className="text-gray-400 mt-4">
                11 claims have reserves above expected thresholds for their claim type.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white">Customer Follow-ups</h2>
              <p className="text-gray-400 mt-4">
                23 claim-related customer communications are pending this week.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
