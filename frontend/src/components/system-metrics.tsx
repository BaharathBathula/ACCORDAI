"use client";

import { useEffect, useState } from "react";

export default function SystemMetrics() {

  const [metrics, setMetrics] =
    useState<any>(null);

  useEffect(() => {

    async function loadMetrics() {

      try {

        const response =
          await fetch(
            "http://localhost:8000/metrics"
          );

        const data =
          await response.json();

        setMetrics(data);

      } catch (error) {

        console.error(
          "Failed to load metrics",
          error
        );
      }
    }

    loadMetrics();

  }, []);

  if (!metrics) {

    return (
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-gray-400">
        Loading system metrics...
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

      <h2 className="text-2xl font-semibold text-white mb-6">
        System Metrics
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-400">
            Total Requests
          </span>

          <span className="text-white">
            {metrics.requests}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            AI Requests
          </span>

          <span className="text-green-400">
            {metrics.ai_requests}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Claims Processed
          </span>

          <span className="text-orange-400">
            {metrics.claims_processed}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Policies Created
          </span>

          <span className="text-blue-400">
            {metrics.policies_created}
          </span>
        </div>

      </div>

    </div>
  );
}
