"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

export const useAuth = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (response?.error) {
        alert("Error: " + response.error);
      } else {
        const sessionResponse = await fetch("/api/auth/session");
        const session = await sessionResponse.json();
        localStorage.setItem("user", JSON.stringify(session.user));
        router.push("/welcomePage");
      }
    } catch (error) {
      console.error("Error en el login:", error);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};
