"use client";

import { useState } from "react";

import { createCustomer } from "@/services/customer-service";

export default function CreateCustomerForm({
  onCreated
}: {
  onCreated?: () => void;
}) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    customer_type: "Personal",
    status: "active"
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    setSuccess("");

    setError("");

    try {

      await createCustomer(formData);

      setSuccess(
        "Customer created successfully."
      );

      if (onCreated) {
        onCreated();
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        customer_type: "Personal",
        status: "active"
      });

    } catch (err) {

      setError(
        "Failed to create customer."
      );

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
        Create Customer
      </h2>

      <div className="grid grid-cols-2 gap-5">

        <input
          type="text"
          placeholder="Customer Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          required
        />

        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
        />

        <select
          value={formData.customer_type}
          onChange={(e) =>
            setFormData({
              ...formData,
              customer_type: e.target.value
            })
          }
          className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
        >

          <option value="Personal">
            Personal
          </option>

          <option value="Commercial">
            Commercial
          </option>

        </select>

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
        className="mt-6 bg-blue-600 hover:bg-blue-500 transition-all px-6 py-4 rounded-xl text-white font-medium"
      >

        {loading
          ? "Creating..."
          : "Create Customer"}

      </button>

    </form>
  );
}
