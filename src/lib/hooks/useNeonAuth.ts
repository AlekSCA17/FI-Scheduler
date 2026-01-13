/**
 * Neon Auth Hook
 *
 * Custom hook to access Neon Auth state and methods using BetterAuthReactAdapter.
 */
import { neonClient } from "@lib/helpers/neonAuth";

export interface UseNeonAuthReturn {
  user: any | null;
  session: any | null;
  isLoading: boolean;
  accessToken: string | null;
  getAccessToken: () => Promise<string | null>;
  signOut: () => Promise<void>;
}

export function useNeonAuth(): UseNeonAuthReturn {
  const sessionQuery = neonClient.auth.useSession();

  const getAccessToken = async (): Promise<string | null> => {
    if (sessionQuery.data?.session?.token) {
      return sessionQuery.data.session.token;
    }
    return null;
  };

  const signOut = async (): Promise<void> => {
    // Sign out from Neon Auth
    await neonClient.auth.signOut();

    // Clear all localStorage data
    localStorage.removeItem("semestrix-query-cache");

    // Clear all other potential user data stored in localStorage
    const keysToRemove = Object.keys(localStorage).filter(
      (key) =>
        key.startsWith("semestrix-") ||
        key.includes("user") ||
        key.includes("auth")
    );
    keysToRemove.forEach((key) => localStorage.removeItem(key));

    // Clear sessionStorage as well
    sessionStorage.clear();

    // Redirect to home page and force reload
    window.location.href = "/";
  };

  return {
    user: sessionQuery.data?.user ?? null,
    session: sessionQuery.data ?? null,
    isLoading: sessionQuery.isPending,
    accessToken: sessionQuery.data?.session?.token ?? null,
    getAccessToken,
    signOut,
  };
}
