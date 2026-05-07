import { apiFetch } from "@/lib/api";


export async function login(
  email: string,
  password: string
) {
  return apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password
    })
  });
}
