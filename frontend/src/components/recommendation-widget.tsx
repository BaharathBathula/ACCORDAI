"use client";

import { useEffect, useState } from "react";

import { generateRecommendations } from "@/services/recommendation-service";

export default function RecommendationWidget() {

  const [recommendations, setRecommendations] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function loadRecommendations() {

      try {

        const response =
          await generateRecommendations(
            "customer",
            "demo-customer",
            {
              total_premium: 12500,
              policies: [
                "auto",
                "home"
              ]
            }
          );

        setRecommendations(
          response.recommendations
        );

      } catch (error) {

        console.error(
          "Failed to load recommendations",
          error
        );

      } finally {

        setLoading(false);
      }
    }

    loadRecommendations();

  }, []);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

      <h2 className="text-2xl font-semibold text-white mb-6">
        AI Recommendations
      </h2>

      {loading && (
        <div className="text-gray-400">
          Loading recommendations...
        </div>
      )}

      <div className="space-y-4">

        {recommendations.map(
          (recommendation, index) => (

            <div
              key={index}
              className="bg-gray-950 border border-gray-800 rounded-xl p-4"
            >

              <div className="flex items-center justify-between mb-2">

                <span className="text-white font-medium">
                  {recommendation.type}
                </span>

                <span className="text-green-400 text-sm">
                  {recommendation.priority}
                </span>

              </div>

              <p className="text-gray-400 text-sm">
                {recommendation.message}
              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}
