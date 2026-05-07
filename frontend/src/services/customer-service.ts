import { apiFetch } from "@/lib/api";


export async function getCustomers() {
  return apiFetch("/customers");
}


export async function createCustomer(
  customerData: any
) {
  return apiFetch("/customers", {
    method: "POST",
    body: JSON.stringify(customerData)
  });
}
