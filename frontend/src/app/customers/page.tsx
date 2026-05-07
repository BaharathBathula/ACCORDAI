"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

import { getCustomers } from "@/services/customer-service";

export default function CustomersPage() {

  const [customers, setCustomers] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCustomers() {

      try {
        const data = await getCustomers();

        setCustomers(data);

      } catch (error) {

        console.error(
          "Failed to load customers",
          error
        );

      } finally {

        setLoading(false);
      }
    }

    loadCustomers();

  }, []);

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
                Insurance customer management
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-white">
              Add Customer
            </button>

          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">

            {loading ? (

              <div className="p-10 text-gray-400">
                Loading customers...
              </div>

            ) : (

              <table className="w-full">

                <thead className="bg-gray-950">
                  <tr>
                    <th className="text-left text-gray-400 p-5">
                      Name
                    </th>

                    <th className="text-left text-gray-400 p-5">
                      Email
                    </th>

                    <th className="text-left text-gray-400 p-5">
                      Phone
                    </th>

                    <th className="text-left text-gray-400 p-5">
                      Type
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
                      className="border-t border-gray-800 hover:bg-gray-800"
                    >

                      <td className="p-5 text-white">
                        {customer.name}
                      </td>

                      <td className="p-5 text-gray-300">
                        {customer.email}
                      </td>

                      <td className="p-5 text-gray-300">
                        {customer.phone}
                      </td>

                      <td className="p-5 text-gray-300">
                        {customer.customer_type}
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

            )}

          </div>

        </div>
      </section>
    </main>
  );
}
