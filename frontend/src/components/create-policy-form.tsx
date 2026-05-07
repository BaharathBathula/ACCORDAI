"use client";

import { useState } from "react";

import { createPolicy } from "@/services/policy-service";

export default function CreatePolicyForm({
  onCreated
}: {
  onCreated?: () => void;
}) {
  const [formData, setFormData] = useState({
    customer_id: 1,
    policy_number: "",
    line_of_business: "Personal Auto",
    carrier: "",
    premium: 0,
    status: "active",
    effective_date: "",
    expiration_date: ""
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
      await createPolicy(formData);

      setSuccess("Policy created successfully.");

      if (onCreated) {
        onCreated();
      }

      setFormData({
        customer_id: 1,
        policy_number: "",
        line_of_business: "Personal Auto",
        carrier: "",
        premium: 0,
        status: "active",
        effective_date: "",
        expiration_date: ""
      });

    } catch (err) {
      setError("Failed to create policy.");
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
        Create Policy
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
          type="text"
          placeholder="Policy Number"
          value={formData.policy_number}
          onChange={(e) =>
            setFormData({
              ...formData,
              policy_number: e.target.value
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          required
        />

        <select
          value={formData.line_of_business}
          onChange={(e) =>
            setFormData({
              ...formData,
              line_of_business: e.target.value
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
        >
          <option value="Personal Auto">Personal Auto</option>
          <option value="Homeowners">Homeowners</option>
          <option value="Commercial Auto">Commercial Auto</option>
          <option value="General Liability">General Liability</option>
          <option value="Commercial Property">Commercial Property</option>
        </select>

        <input
          type="text"
          placeholder="Carrier"
          value={formData.carrier}
          onChange={(e) =>
            setFormData({
              ...formData,
              carrier: e.target.value
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          required
        />

        <input
          type="number"
          placeholder="Premium"
          value={formData.premium}
          onChange={(e) =>
            setFormData({
              ...formData,
              premium: Number(e.target.value)
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          required
        />

        <input
          type="text"
          placeholder="Effective Date"
          value={formData.effective_date}
          onChange={(e) =>
            setFormData({
              ...formData,
              effective_date: e.target.value
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          required
        />

        <input
          type="text"
          placeholder="Expiration Date"
          value={formData.expiration_date}
          onChange={(e) =>
            setFormData({
              ...formData,
              expiration_date: e.target.value
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
        {loading ? "Creating..." : "Create Policy"}
      </button>
    </form>
  );
}
