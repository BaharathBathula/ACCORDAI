"use client";

import { useState } from "react";

import { useCreateCustomer } from "@/hooks/use-customers";

export default function CreateCustomerForm() {
  const createCustomerMutation = useCreateCustomer();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    customer_type: "Personal",
    status: "active"
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    createCustomerMutation.mutate(formData, {
      onSuccess: () => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          customer_type: "Personal",
          status: "active"
        });
      }
    });
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
          <option value="Personal">Personal</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>

      {createCustomerMutation.isSuccess && (
        <div className="text-green-400 mt-5">
          Customer created successfully.
        </div>
      )}

      {createCustomerMutation.isError && (
        <div className="text-red-400 mt-5">
          Failed to create customer.
        </div>
      )}

      <button
        type="submit"
        disabled={createCustomerMutation.isPending}
        className="mt-6 bg-blue-600 hover:bg-blue-500 transition-all px-6 py-4 rounded-xl text-white font-medium"
      >
        {createCustomerMutation.isPending
          ? "Creating..."
          : "Create Customer"}
      </button>
    </form>
  );
}
