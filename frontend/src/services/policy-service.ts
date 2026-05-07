import { apiFetch } from "@/lib/api";


export async function getPolicies() {
  return apiFetch("/policies");
}
