"use client";

import { useRealtime } from "@/hooks/use-realtime";

export default function ActivityFeed() {

  const { messages } = useRealtime();

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

      <h2 className="text-2xl font-semibold text-white mb-6">
        Live Activity Feed
      </h2>

      <div className="space-y-4 max-h-[500px] overflow-auto">

        {messages.length === 0 && (

          <div className="text-gray-500">
            Waiting for realtime events...
          </div>

        )}

        {messages.map((message, index) => (

          <div
            key={index}
            className="bg-gray-950 border border-gray-800 rounded-xl p-4"
          >

            <div className="text-blue-400 text-sm mb-2">
              {message.type}
            </div>

            <div className="text-gray-300">
              {message.message}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
