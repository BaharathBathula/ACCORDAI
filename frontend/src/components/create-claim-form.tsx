"use client";

import { useState } from "react";

import { createClaim } from "@/services/claim-service";

export default function CreateClaimForm({
  onCreated
}: {
  onCreated?: () => void;
}) {
  const [formData, setFormData] = useState({
    customer_id: 1,
    policy_id: 1,
    claim_number: "",
    claim_type: "Auto Collision",
    status: "open",
    reserve_amount: 0,
    loss_date: "",
    ai_risk_score: 0
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await createClaim(formData);

      setSuccess("Claim created successfully.");

      if (onCreated) {
        onCreated();
      }

      setFormData({
        customer_id: 1,
        policy_id: 1,
        claim_number: "",
        claim_type: "Auto Collision",
        status: "open",
        reserve_amount: 0,
        loss_date: "",
        ai_risk_score: 0
      });

    } catch (err) {
      setError("Failed to create claim.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">
        Create Claim
      </h2>

      <div className="grid grid-cols-2 gap-5">
        <input
          type="number"
          placeholder="Customer ID"
          value={formData.customer_id}
          onChange={(e) =>
            setFormData({
              ...formData,
              customer_id: Number(e.target.value)
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          required
        />

        <input
          type="number"
          placeholder="Policy ID"
          value={formData.policy_id}
          onChange={(e) =>
            setFormData({
              ...formData,
              policy_id: Number(e.target.value)
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          required
        />

        <input
          type="text"
          placeholder="Claim Number"
          value={formData.claim_number}
          onChange={(e) =>
            setFormData({
              ...formData,
              claim_number: e.target.value
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          required
        />

        <select
          value={formData.claim_type}
          onChange={(e) =>
            setFormData({
              ...formData,
              claim_type: e.target.value
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
        >
          <option value="Auto Collision">Auto Collision</option>
          <option value="Property Damage">Property Damage</option>
          <option value="Bodily Injury">Bodily Injury</option>
          <option value="General Liability">General Liability</option>
          <option value="Workers Compensation">Workers Compensation</option>
        </select>

        <input
          type="number"
          placeholder="Reserve Amount"
          value={formData.reserve_amount}
          onChange={(e) =>
            setFormData({
              ...formData,
              reserve_amount: Number(e.target.value)
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          required
        />

        <input
          type="text"
          placeholder="Loss Date"
          value={formData.loss_date}
          onChange={(e) =>
            setFormData({
              ...formData,
              loss_date: e.target.value
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          required
        />
      </div>

      {success && (
        <div className="text-green-400 mt-5">
          {success}
        </div>
      )}

      {error && (
        <div className="text-red-400 mt-5">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 bg-blue-600 hover:bg-blue-500 px-6 py-4 rounded-xl text-white"
      >
        {loading ? "Creating..." : "Create Claim"}
      </button>
    </form>
  );
}
