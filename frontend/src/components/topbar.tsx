"use client";

import { removeToken } from "@/lib/auth";

export default function Topbar() {

  function handleLogout() {

    removeToken();

    window.location.href = "/login";
  }

  return (
    <div className="flex items-center justify-between px-8 py-5 border-b border-gray-800 bg-black">

      <div>
        <h2 className="text-xl font-semibold text-white">
          ACCORDAI
        </h2>

        <p className="text-sm text-gray-400">
          AI-Native Insurance Operating System
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl text-gray-300">
          Enterprise Mode
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-500 transition-all px-4 py-2 rounded-xl text-white"
        >
          Logout
        </button>

      </div>

    </div>
  );
}
