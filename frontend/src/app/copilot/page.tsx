"use client";

import { useState } from "react";

import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

import { askCopilot } from "@/services/chat-service";

export default function CopilotPage() {
  const [sessionId] = useState("demo-session");

  const [messages, setMessages] = useState<any[]>([
    {
      role: "assistant",
      content:
        "Hello, I am ACCORDAI Copilot. Ask me about policies, claims, renewals, documents, workflows, or insurance intelligence."
    }
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input
    };

    setMessages((prev) => [
      ...prev,
      userMessage
    ]);

    setLoading(true);

    try {
      const response = await askCopilot(
        sessionId,
        input
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.response,
          intent: response.intent
        }
      ]);

      setInput("");

    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, ACCORDAI Copilot could not process the request."
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1">
        <Topbar />

        <div className="p-8 h-[calc(100vh-80px)] flex flex-col">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white">
              AI Copilot
            </h1>

            <p className="text-gray-400 mt-2">
              Conversational insurance intelligence assistant powered by multi-agent AI and RAG
            </p>
          </div>

          <div className="flex-1 bg-gray-900 border border-gray-800 rounded-2xl p-6 overflow-y-auto space-y-5">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={
                    message.role === "user"
                      ? "max-w-2xl bg-blue-600 text-white rounded-2xl p-5"
                      : "max-w-2xl bg-gray-950 border border-gray-800 text-gray-300 rounded-2xl p-5"
                  }
                >
                  <p>{message.content}</p>

                  {message.intent && (
                    <div className="text-xs text-green-400 mt-3">
                      Routed Intent: {message.intent}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-gray-500">
                ACCORDAI Copilot is thinking...
              </div>
            )}
          </div>

          <div className="mt-5 flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              placeholder="Ask about policies, claims, renewals, documents, workflows..."
              className="flex-1 bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 text-white outline-none"
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-500 px-6 py-4 rounded-xl text-white"
            >
              {loading ? "Thinking..." : "Send"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
