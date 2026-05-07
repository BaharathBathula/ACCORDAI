import { apiFetch } from "@/lib/api";


export async function getPolicies() {
  return apiFetch("/policies");
}


export async function createPolicy(
  policyData: any
) {
  return apiFetch("/policies", {
    method: "POST",
    body: JSON.stringify(policyData)
  });
}
