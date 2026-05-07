const TOKEN_KEY = "accordai_access_token";


export function saveToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}


export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}


export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}


export function isAuthenticated() {
  return !!getToken();
}
