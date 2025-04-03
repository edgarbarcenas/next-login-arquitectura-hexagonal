# 🚀 Next.js + Arquitectura Hexagonal + Login

Este es un proyecto de ejemplo que implementa un sistema de **autenticación** con Next.js, siguiendo los principios de la **Arquitectura Hexagonal** para lograr una mejor organización del código, modularidad y escalabilidad.

## 📌 Características principales

✅ **Next.js con App Router** 🏗️  
✅ **Autenticación con credenciales (next-auth)** 🔑  
✅ **Arquitectura Hexagonal (Clean Architecture aplicada a un monolito)** 🧩  
✅ **Prisma como ORM** 🗄️  
✅ **Capa de Infraestructura bien definida** 🔌  
✅ **Código modular y reutilizable** 📦  

---

## 🏗️ Estructura del Proyecto

```plaintext
src/
├── app/                      # Capa de Presentación (UI y API Routes)
│   ├── login/                # Página de Login
│   │   └── page.tsx          # Componente de Login
│   ├── welcome/              # Página de bienvenida
│   │   └── page.tsx
│   └── api/                  # API Routes para Next.js
│       └── auth/
│           └── [...nextauth].ts  # Configuración de next-auth
├── core/                     # Capa de Dominio y Aplicación
│   ├── domain/               # Lógica del negocio
│   │   ├── entities/         # Entidades de dominio (User, Post, etc.)
│   │   │   └── User.ts
│   │   ├── repositories/     # Interfaces de repositorios (contratos)
│   │   │   └── UserRepository.ts
│   ├── application/          # Casos de uso
│   │   └── use-cases/        # Implementación de la lógica de negocio
│   │       └── CreateUser.ts
├── infrastructure/           # Capa de Infraestructura (adaptadores)
│   ├── database/             # Base de datos
│   │   ├── prisma/           # ORM Prisma
│   │   │   ├── migrations/   # Migraciones de la base de datos
│   │   │   ├── schema.prisma # Esquema de Prisma
│   │   │   └── client.ts     # Cliente Prisma centralizado
│   │   ├── repositories/     # Implementaciones de repositorios
│   │   │   └── PrismaUserRepository.ts
│   ├── ui/                   # Adaptadores de UI
│   │   └── components/       # Componentes reutilizables
│   │       └── UserProfile.tsx
│   ├── auth/                 # Configuración de autenticación
│   │   └── authOptions.ts    # Configuración de next-auth (JWT, sesiones)
└── shared/                   # Recursos compartidos
    ├── components/           # Componentes globales
    ├── utils/                # Funciones helper y constantes
    ├── hooks/                # Hooks personalizados
    │   └── useAuth.ts        # Hook para obtener el estado del usuario autenticado
```

---

## 🚀 Instalación y Configuración

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/edgarbarcenas/next-login-arquitectura-hexagonal.git
cd next-login-arquitectura-hexagonal
```

### 2️⃣ Instalar dependencias
```bash
yarn install  # o npm install
```

### 3️⃣ Configurar variables de entorno
Renombrar el archivo `.env.example` a `.env.local` y completar los valores necesarios, como la conexión a la base de datos y la configuración de next-auth.

### 4️⃣ Ejecutar migraciones de Prisma
```bash
npm run migrate
npm run generate
```

### 5️⃣ Iniciar el servidor
```bash
yarn dev  # o npm run dev
```

La aplicación estará disponible en `http://localhost:3000` 🚀

---

## 🛠️ Tecnologías Utilizadas
- **Next.js** (App Router)
- **NextAuth.js** (Autenticación)
- **Prisma ORM**
- **TypeScript**
- **Arquitectura Hexagonal**

---

## ENV
- **NEXTAUTH_SECRET**
- **POSTGRES_URL_NON_POOLING**

## 🎯 Funcionalidades Implementadas
- **Login de usuarios** con credenciales.
- **Persistencia de sesión** utilizando `next-auth`.
- **Arquitectura Hexagonal**, separando Presentación, Aplicación, Dominio e Infraestructura.
- **Base de datos con Prisma**, soportando PostgreSQL, MySQL y SQLite.

💡 **Si te gustó este proyecto, no olvides darle una ⭐ en GitHub!**
