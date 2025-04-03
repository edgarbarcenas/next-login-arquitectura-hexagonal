"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

/**
 * Hook para proteger páginas autenticadas y redirigir a "/login" si no hay sesión.
 * @returns {object} session - Información del usuario autenticado.
 */
export const useAuthRedirect = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  return { session, status };
};
