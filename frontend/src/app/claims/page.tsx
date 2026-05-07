"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

import SearchInput from "@/components/search-input";

import CreateClaimForm from "@/components/create-claim-form";

import { getClaims } from "@/services/claim-service";

export default function ClaimsPage() {

  const [claims, setClaims] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  async function loadClaims() {

    try {

      const data = await getClaims();

      setClaims(data);

    } catch (error) {

      console.error(
        "Failed to load claims",
        error
      );

    } finally {

      setLoading(false);
    }
  }

  useEffect(() => {

    loadClaims();

  }, []);

  const filteredClaims = claims.filter(
    (claim) =>
      claim.claim_number
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      claim.claim_type
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      claim.status
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
                Claims
              </h1>

              <p className="text-gray-400 mt-2">
                Track claims, reserves, fraud indicators, and claim workflows
              </p>

            </div>

          </div>

          <div className="mb-10">

            <CreateClaimForm
              onCreated={loadClaims}
            />

          </div>

          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search claims by number, type, or status..."
          />

          {loading && (

            <div className="text-gray-400 mb-5">
              Loading claims...
            </div>

          )}

          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">

            <table className="w-full">

              <thead className="bg-gray-950">

                <tr>

                  <th className="text-left text-gray-400 p-5">
                    Claim #
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Customer ID
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Policy ID
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Type
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Reserve
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Loss Date
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredClaims.map((claim) => (

                  <tr
                    key={claim.id}
                    className="border-t border-gray-800 hover:bg-gray-800 transition-all"
                  >

                    <td className="p-5 text-white">
                      {claim.claim_number}
                    </td>

                    <td className="p-5 text-gray-300">
                      {claim.customer_id}
                    </td>

                    <td className="p-5 text-gray-300">
                      {claim.policy_id}
                    </td>

                    <td className="p-5 text-gray-300">
                      {claim.claim_type}
                    </td>

                    <td className="p-5 text-gray-300">
                      ${claim.reserve_amount}
                    </td>

                    <td className="p-5 text-gray-300">
                      {claim.loss_date}
                    </td>

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

        </div>

      </section>

    </main>
  );
}
