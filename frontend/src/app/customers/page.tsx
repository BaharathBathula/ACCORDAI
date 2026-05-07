import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

const customers = [
  {
    id: 1,
    name: "John Smith",
    type: "Personal Lines",
    policies: 3,
    premium: "$4,250",
    status: "Active"
  },
  {
    id: 2,
    name: "ABC Logistics LLC",
    type: "Commercial",
    policies: 8,
    premium: "$42,800",
    status: "Active"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    type: "Personal Lines",
    policies: 2,
    premium: "$2,150",
    status: "Pending Renewal"
  }
];

export default function CustomersPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1">
        <Topbar />

        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white">
                Customers
              </h1>

              <p className="text-gray-400 mt-2">
                Insurance customer and account management
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-500 transition-all px-5 py-3 rounded-xl text-white font-medium">
              Add Customer
            </button>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-950">
                <tr>
                  <th className="text-left text-gray-400 p-5">
                    Customer
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Type
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Policies
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Premium
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-t border-gray-800 hover:bg-gray-800 transition-all"
                  >
                    <td className="p-5 text-white">
                      {customer.name}
                    </td>

                    <td className="p-5 text-gray-300">
                      {customer.type}
                    </td>

                    <td className="p-5 text-gray-300">
                      {customer.policies}
                    </td>

                    <td className="p-5 text-gray-300">
                      {customer.premium}
                    </td>

                    <td className="p-5">
                      <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
                        {customer.status}
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
