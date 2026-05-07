import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

const documents = [
  {
    id: 1,
    file: "ACORD_125_Commercial_Auto.pdf",
    type: "ACORD Form",
    customer: "ABC Logistics LLC",
    status: "Processed"
  },
  {
    id: 2,
    file: "Personal_Auto_Policy.pdf",
    type: "Policy Document",
    customer: "John Smith",
    status: "AI Reviewed"
  },
  {
    id: 3,
    file: "Claim_Investigation_Report.pdf",
    type: "Claims Document",
    customer: "Sarah Johnson",
    status: "Flagged"
  }
];

export default function DocumentsPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1">
        <Topbar />

        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white">
                Documents
              </h1>

              <p className="text-gray-400 mt-2">
                Insurance document management and AI intelligence
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-white">
              Upload Document
            </button>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-10">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">
                Total Documents
              </p>

              <h2 className="text-4xl font-bold text-white mt-3">
                12,482
              </h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">
                AI Processed
              </p>

              <h2 className="text-4xl font-bold text-green-400 mt-3">
                11,903
              </h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">
                Pending Review
              </p>

              <h2 className="text-4xl font-bold text-orange-400 mt-3">
                142
              </h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">
                Flagged Files
              </p>

              <h2 className="text-4xl font-bold text-red-400 mt-3">
                18
              </h2>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-950">
                <tr>
                  <th className="text-left text-gray-400 p-5">
                    File
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Type
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Customer
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {documents.map((document) => (
                  <tr
                    key={document.id}
                    className="border-t border-gray-800 hover:bg-gray-800 transition-all"
                  >
                    <td className="p-5 text-white">
                      {document.file}
                    </td>

                    <td className="p-5 text-gray-300">
                      {document.type}
                    </td>

                    <td className="p-5 text-gray-300">
                      {document.customer}
                    </td>

                    <td className="p-5">
                      <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {document.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
