"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/services/auth-service";

import { saveToken } from "@/lib/auth";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState(
    "admin@accordai.com"
  );

  const [password, setPassword] = useState(
    "admin123"
  );

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleLogin() {

    setLoading(true);

    setError("");

    try {

      const response = await login(
        email,
        password
      );

      saveToken(response.access_token);

      router.push("/dashboard");

    } catch (err) {

      setError(
        "Invalid login credentials"
      );

    } finally {

      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-10">

        <h1 className="text-4xl font-bold text-white mb-2">
          ACCORDAI
        </h1>

        <p className="text-gray-400 mb-8">
          Insurance AI Platform Login
        </p>

        <div className="space-y-5">

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Email"
            className="w-full bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          />

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="Password"
            className="w-full bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          />

          {error && (
            <div className="text-red-400 text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 transition-all py-4 rounded-xl text-white font-medium"
          >

            {loading
              ? "Signing In..."
              : "Sign In"}

          </button>

        </div>

        <div className="mt-8 text-sm text-gray-500">

          Demo Credentials:

          <br />

          admin@accordai.com

          <br />

          admin123

        </div>

      </div>

    </main>
  );
}
