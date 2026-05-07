"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

import SearchInput from "@/components/search-input";

import CreatePolicyForm from "@/components/create-policy-form";

import { getPolicies } from "@/services/policy-service";

export default function PoliciesPage() {

  const [policies, setPolicies] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  async function loadPolicies() {

    try {

      const data = await getPolicies();

      setPolicies(data);

    } catch (error) {

      console.error(
        "Failed to load policies",
        error
      );

    } finally {

      setLoading(false);
    }
  }

  useEffect(() => {

    loadPolicies();

  }, []);

  const filteredPolicies = policies.filter(
    (policy) =>
      policy.policy_number
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      policy.line_of_business
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      policy.carrier
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
                Policies
              </h1>

              <p className="text-gray-400 mt-2">
                Manage policy lifecycle, renewals, carriers, and coverage intelligence
              </p>

            </div>

          </div>

          <div className="mb-10">

            <CreatePolicyForm
              onCreated={loadPolicies}
            />

          </div>

          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search policies by number, line, or carrier..."
          />

          {loading && (

            <div className="text-gray-400 mb-5">
              Loading policies...
            </div>

          )}

          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">

            <table className="w-full">

              <thead className="bg-gray-950">

                <tr>

                  <th className="text-left text-gray-400 p-5">
                    Policy #
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Customer ID
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Line
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Carrier
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Premium
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Expiration
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredPolicies.map((policy) => (

                  <tr
                    key={policy.id}
                    className="border-t border-gray-800 hover:bg-gray-800 transition-all"
                  >

                    <td className="p-5 text-white">
                      {policy.policy_number}
                    </td>

                    <td className="p-5 text-gray-300">
                      {policy.customer_id}
                    </td>

                    <td className="p-5 text-gray-300">
                      {policy.line_of_business}
                    </td>

                    <td className="p-5 text-gray-300">
                      {policy.carrier}
                    </td>

                    <td className="p-5 text-gray-300">
                      ${policy.premium}
                    </td>

                    <td className="p-5 text-gray-300">
                      {policy.expiration_date}
                    </td>

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

        </div>

      </section>

    </main>
  );
}
