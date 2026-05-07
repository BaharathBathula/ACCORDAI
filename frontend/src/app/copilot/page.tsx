import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

const conversations = [
  {
    role: "user",
    message: "Show customers with upcoming renewals and high premiums."
  },
  {
    role: "assistant",
    message:
      "14 policies were identified with renewal dates in the next 30 days and premiums above agency thresholds."
  },
  {
    role: "user",
    message: "Identify customers missing rental reimbursement coverage."
  },
  {
    role: "assistant",
    message:
      "26 customer accounts are missing rental reimbursement coverage opportunities."
  }
];

export default function CopilotPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1">
        <Topbar />

        <div className="p-8 h-[calc(100vh-90px)] flex flex-col">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white">
              AI Copilot
            </h1>

            <p className="text-gray-400 mt-2">
              Conversational insurance operations assistant
            </p>
          </div>

          <div className="flex-1 bg-gray-900 border border-gray-800 rounded-2xl flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {conversations.map((chat, index) => (
                <div
                  key={index}
                  className={`max-w-3xl ${
                    chat.role === "user"
                      ? "ml-auto"
                      : "mr-auto"
                  }`}
                >
                  <div
                    className={`rounded-2xl p-5 ${
                      chat.role === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-950 border border-gray-800 text-gray-300"
                    }`}
                  >
                    {chat.message}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-800 p-5">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Ask ACCORDAI AI about policies, claims, customers, workflows..."
                  className="flex-1 bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
                />

                <button className="bg-blue-600 hover:bg-blue-500 transition-all px-6 rounded-xl text-white font-medium">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
