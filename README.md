Aplicacion Dashboard/BackOffice

Arquitectura: **Hexagonal Architecture**

`src/
├── app/                      # Capa de Presentación (UI y API Routes)
│   ├── about/                # Página "About" (Ejemplo)
│   │   └── page.tsx
│   └── api/                  # API Routes para Next.js
│       └── user/
│           └── route.ts
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
│   ├── store/                # Redux Store y su configuración
│   │   ├── store.ts          # Configuración principal del store
│   │   └── slices/           # Reducers (slices)
│   │       └── authSlice.ts  # Estado de autenticación en Redux
│   ├── auth/                 # Configuración de autenticación
│   │   └── authOptions.ts    # Configuración de next-auth (JWT, sesiones)
└── shared/                   # Recursos compartidos
    ├── components/           # Componentes globales
    └── utils/                # Funciones helper y constantes
    ├── hooks/                # Hooks personalizados
    │   └── useAuth.ts        # Hook para obtener el estado del usuario autenticado
`

