"use client";
import { signOut } from "next-auth/react";
import { useAuthRedirect } from "../shared/hooks/useAuthRedirect";

const WelcomePage = () => {
  const { session, status } = useAuthRedirect();

  if (status === "loading") return null; // Evita renderizar hasta que se cargue la sesión

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          ¡Bienvenido, {session?.user?.name || session?.user?.email}!
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Estamos felices de tenerte con nosotros.
        </p>
        <button
          onClick={() => signOut({
            redirect: true,
            callbackUrl: "/login",
          })}
          className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
