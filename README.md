# 🚀 Starter Kit T3 Enhanced

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![tRPC](https://img.shields.io/badge/tRPC-2596BE?style=for-the-badge&logo=trpc&logoColor=white)

Un boilerplate de producción robusto basado en la arquitectura [Create T3 App](https://create.t3.gg/). Este kit pre-configura las herramientas esenciales que toda aplicación SaaS moderna necesita pero que usualmente requieren horas de configuración manual: **colas de trabajo (background jobs)**, **correos transaccionales** e **internacionalización**.

---

## ✨ Características

Este proyecto incluye todo lo que amas del [Stack T3](https://create.t3.gg/) más superpoderes adicionales:

- **Framework Full-Stack:** [Next.js](https://nextjs.org) (App Router)
- **Lenguaje Seguro:** [TypeScript](https://www.typescriptlang.org) estricto.
- **Estilizado:** [Tailwind CSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com/) para componentes UI rápidos.
- **Base de Datos & ORM:** [Prisma](https://www.prisma.io) con PostgreSQL.
- **API Type-Safe:** [tRPC](https://trpc.io) para comunicación cliente-servidor sin esquemas manuales.
- **Autenticación:** [Auth.js (NextAuth v5)](https://authjs.dev) lista para usar.
- **⚡ Background Jobs (Nuevo):** Integración con [Inngest](https://www.inngest.com/) para cron jobs, colas y funciones serverless duraderas.
- **📨 Emails (Nuevo):** [Resend](https://resend.com/) + [React Email](https://react.email/) para diseñar y enviar correos transaccionales.
- **🌐 i18n (Nuevo):** [next-intl](https://next-intl-docs.vercel.app/) configurado para Server & Client Components.

---

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v18 o superior)
- Un gestor de paquetes (`npm`, `pnpm` o `yarn`)
- Una base de datos PostgreSQL (local o en la nube como Supabase/Neon)

---

## 🚀 Guía de Inicio Rápido

### 1. Clonar el repositorio

```bash
git clone <tu-repositorio-url>
cd starter-kit-ts
```

### 2. Instalar dependencias

```bash
npm install
# o
pnpm install
```

### 3. Configurar Variables de Entorno

Copia el archivo de ejemplo y configura tus credenciales:

```bash
cp .env.example .env
```

Abre el archivo `.env` y rellena las variables clave:

- `DATABASE_URL`: Tu conexión a PostgreSQL.
- `NEXTAUTH_SECRET`: Genera uno con `openssl rand -base64 32`.
- `RESEND_API_KEY`: Tu API Key de [Resend](https://resend.com/).
- `INNGEST_EVENT_KEY`: (Opcional en local) Clave de eventos de Inngest.

### 4. Inicializar la Base de Datos

Sincroniza tu esquema de Prisma con la base de datos:

```bash
npm run db:push
```

### 5. Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

---

## 📘 Documentación de Funcionalidades

### ⚡ Workers & Background Jobs (Inngest)

Olvídate de configurar Redis o servidores de colas complejos. Inngest maneja la orquestación de eventos.

**Ubicación:** `src/inngest/functions`

**Cómo crear un nuevo Job:**

1. Crea un archivo en `src/inngest/functions`.
2. Define tu función usando `inngest.createFunction`.
3. Expórtala en `src/inngest/index.ts`.

**Probando localmente:**
Inngest incluye un dashboard local para ver y disparar eventos.

```bash
npx inngest-cli@latest dev
```

Abre `http://localhost:8288` para ver el dashboard.

### 📨 Emails Transaccionales (Resend)

Envía correos usando componentes de React.

**Ubicación:** `src/emails` (Templates), `src/lib/email` (Utilidad)

**Ejemplo de uso:**

```typescript
import { sendEmail } from "@/lib/email";
import WelcomeEmail from "@/emails/WelcomeEmail";

await sendEmail({
  to: "usuario@ejemplo.com",
  subject: "¡Bienvenido a bordo!",
  react: WelcomeEmail({ name: "Alex" }),
});
```

### 🌐 Internacionalización (i18n)

Soporte multi-idioma nativo.

**Ubicación:** `/messages` (Archivos JSON de traducción)

**Agregar un nuevo idioma:**

1. Crea `messages/fr.json` (por ejemplo).
2. Agrega las traducciones.
3. Actualiza la configuración de locales en `src/i18n/request.ts` y el middleware si es necesario.

**Uso en componentes:**

```typescript
// Server Component
import { getTranslations } from 'next-intl/server';

const t = await getTranslations('Index');
return <h1>{t('title')}</h1>;

// Client Component
import { useTranslations } from 'next-intl';

const t = useTranslations('Index');
return <h1>{t('title')}</h1>;
```

---

## 🗄️ Comandos de Base de Datos

El proyecto utiliza Prisma ORM. Aquí los comandos más útiles:

| Comando               | Descripción                                                      |
| --------------------- | ---------------------------------------------------------------- |
| `npm run db:push`     | Sincroniza el esquema con la DB (ideal para prototipado rápido). |
| `npm run db:generate` | Genera el cliente de Prisma (tipos TypeScript).                  |
| `npm run db:migrate`  | Crea y aplica migraciones SQL (para producción).                 |
| `npm run db:studio`   | Abre una interfaz visual para ver/editar tus datos.              |

---

## 📂 Estructura del Proyecto

```
.
├── src/
│   ├── app/              # Next.js App Router (Páginas y Layouts)
│   ├── components/       # Componentes React reutilizables
│   ├── emails/           # Templates de React Email
│   ├── inngest/          # Funciones y configuración de Inngest
│   ├── lib/              # Utilidades y configuraciones de librerías
│   ├── server/           # Backend (tRPC, Auth, DB)
│   │   ├── api/          # Routers y definiciones de tRPC
│   │   ├── db.ts         # Instancia de Prisma
│   │   └── auth.ts       # Configuración de NextAuth
│   ├── styles/           # Archivos CSS globales
│   └── trpc/             # Configuración del cliente tRPC
├── messages/             # Archivos de traducción (en.json, es.json)
├── prisma/               # Esquema de base de datos
├── public/               # Archivos estáticos
└── ...config files
```

---

## 🚢 Despliegue

Este stack está optimizado para desplegarse en [Vercel](https://vercel.com) o cualquier plataforma que soporte contenedores Docker (como Railway o Fly.io).

### Vercel (Recomendado)

1. Haz push de tu código a GitHub.
2. Importa el proyecto en Vercel.
3. Configura las variables de entorno en el dashboard de Vercel.
4. ¡Despliega!

**Nota sobre Inngest:** Recuerda configurar las variables de entorno `INNGEST_EVENT_KEY` y `INNGEST_SIGNING_KEY` en producción y conectar tu cuenta de Inngest Cloud.

---

## 🤝 Contribuyendo

¡Las contribuciones son bienvenidas! Si tienes una idea para mejorar este starter kit:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios.
4. Abre un Pull Request.

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

---

Construido con ❤️ usando el [Stack T3](https://create.t3.gg/).
