"use client";

import { useEffect, useState } from "react";

export function useRealtime() {

  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {

    const ws = new WebSocket(
      "ws://localhost:8000/realtime/ws"
    );

    ws.onmessage = (event) => {

      const data = JSON.parse(event.data);

      setMessages((prev) => [
        data,
        ...prev
      ]);
    };

    ws.onopen = () => {

      ws.send(
        "ACCORDAI realtime connected"
      );
    };

    return () => {

      ws.close();
    };

  }, []);

  return {
    messages
  };
}
