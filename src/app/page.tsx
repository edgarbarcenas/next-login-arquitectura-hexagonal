import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-xl text-center sm:text-left">
        <h1 className="text-4xl font-bold text-gray-800">
          Aplicación de Ejemplo de Next.js con Arquitectura Hexagonal
        </h1>
        <p className="text-lg text-gray-600">
          Esta es una aplicación de ejemplo construida con <strong>Next.js</strong> que implementa la <strong>arquitectura hexagonal</strong> y un sistema de <strong>autenticación con login implementando JWT</strong>. Ideal para proyectos organizados y escalables.
        </p>

        <Link
          href="/login"
          className="rounded-full border border-blue-500 bg-blue-500 text-white hover:bg-blue-600 transition-colors font-medium text-sm sm:text-base h-10 sm:h-12 px-6 flex items-center justify-center"
        >
          Iniciar sesión
        </Link>
      </main>
    </div>
  );
}
