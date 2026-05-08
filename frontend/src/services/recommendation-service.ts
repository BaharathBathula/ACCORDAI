import { apiFetch } from "@/lib/api";


export async function generateRecommendations(
  entityType: string,
  entityId: string,
  payload: any
) {
  return apiFetch("/recommendations/generate", {
    method: "POST",
    body: JSON.stringify({
      entity_type: entityType,
      entity_id: entityId,
      payload
    })
  });
}
