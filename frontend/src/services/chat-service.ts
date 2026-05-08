import { apiFetch } from "@/lib/api";


export async function askCopilot(
  sessionId: string,
  message: string,
  context: any = {}
) {
  return apiFetch("/chat/ask", {
    method: "POST",
    body: JSON.stringify({
      session_id: sessionId,
      message,
      context
    })
  });
}
