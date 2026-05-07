export default function LoginPage() {
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
            placeholder="Email"
            className="w-full bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-500 transition-all py-4 rounded-xl text-white font-medium">
            Sign In
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
