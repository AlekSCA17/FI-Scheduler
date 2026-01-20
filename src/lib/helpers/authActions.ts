import { neonClient } from "./neonAuth";

export async function signOut() {
  // Sign out from Neon Auth
  await neonClient.auth.signOut();

  // Clear all localStorage data
  localStorage.removeItem("semestrix-query-cache");

  // Clear all other potential user data stored in localStorage
  // You can add more specific keys if needed
  const keysToRemove = Object.keys(localStorage).filter(
    (key) =>
      key.startsWith("semestrix-") ||
      key.includes("user") ||
      key.includes("auth")
  );
  keysToRemove.forEach((key) => localStorage.removeItem(key));

  // Clear sessionStorage as well
  sessionStorage.clear();

  // Redirect to home page and force reload to clear all React Query cache
  window.location.href = "/";
}
