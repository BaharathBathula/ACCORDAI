"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

import SearchInput from "@/components/search-input";

import CreateCustomerForm from "@/components/create-customer-form";

import { getCustomers } from "@/services/customer-service";

export default function CustomersPage() {

  const [customers, setCustomers] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

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

  useEffect(() => {

    loadCustomers();

  }, []);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      customer.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      customer.customer_type
        .toLowerCase()
        .includes(search.toLowerCase())
  );

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

          </div>

          <div className="mb-10">

            <CreateCustomerForm
              onCreated={loadCustomers}
            />

          </div>

          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search customers by name, email, or type..."
          />

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

                  {filteredCustomers.map((customer) => (

                    <tr
                      key={customer.id}
                      className="border-t border-gray-800 hover:bg-gray-800 transition-all"
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
