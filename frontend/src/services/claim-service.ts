import { apiFetch } from "@/lib/api";


export async function getClaims() {
  return apiFetch("/claims");
}


export async function createClaim(
  claimData: any
) {
  return apiFetch("/claims", {
    method: "POST",
    body: JSON.stringify(claimData)
  });
}
