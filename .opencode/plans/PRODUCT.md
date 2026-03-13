# Internationalization (i18n) Implementation Plan

This document outlines the architectural plan to implement internationalization using `next-intl` for the `Home` page and surrounding infrastructure, migrating the application to a standard locale-based routing structure (e.g., `/en/home`, `/es/home`).

## Objectives

1.  **Establish Standard i18n Routing:** Migrate the current page structure to support localized URLs (`/[locale]/...`).
2.  **Configure Middleware:** Implement `next-intl` middleware for automatic locale detection and routing.
3.  **Enable Client-Side Translations:** Configure `NextIntlClientProvider` to support client components.
4.  **Extract & Translate Content:** Move hardcoded text from `Home` page sections into JSON message files (`en.json`, `es.json`).
5.  **Refactor Components:** Update `Hero`, `SocialProof`, `Process`, and `FeatureGrid` to use the `useTranslations` hook.

## Architecture & Workflow

### 1. Directory Structure Migration

To support standard `next-intl` routing, we will restructure the `src/app` directory.

**Current:**

```text
src/app/
├── (pages)/
│   ├── home/
│   └── auth/
├── layout.tsx
└── api/
```

**Target:**

```text
src/app/
├── [locale]/             <-- New Locale Route Group
│   ├── (pages)/
│   │   ├── home/
│   │   └── auth/
│   └── layout.tsx        <-- Moved & Updated Layout
├── api/                  <-- Remains global
└── middleware.ts         <-- New Middleware
```

### 2. Configuration Strategy

- **Middleware (`src/middleware.ts`):** Handles locale matching (default: `en`, supported: `['en', 'es']`) and redirects.
- **Request Config (`src/app/shared/i18n/request.ts`):** Updated to dynamically load messages based on the requested locale.
- **Root Layout (`src/app/[locale]/layout.tsx`):**
  - Validates the `locale` param.
  - Fetches messages server-side (`getMessages()`).
  - Passes messages to `NextIntlClientProvider` to ensure Client Components (like `Hero`) have access to translations.

### 3. Content Extraction (TDD Approach)

We will extract text into structured keys within `messages/en.json` and `messages/es.json`.

**Key Structure Example:**

```json
{
  "Home": {
    "Hero": {
      "title": "The Ultimate T3 Starter Kit",
      "subtitle": "Enhanced for Production",
      "cta": "Get Started Free"
    },
    "SocialProof": { ... },
    "Process": { ... },
    "FeatureGrid": { ... }
  }
}
```

## Step-by-Step Implementation Plan

### Phase 1: Infrastructure & Configuration

1.  **Create Middleware:**
    - Create `src/middleware.ts` using `createMiddleware` from `next-intl`.
    - Configure `locales: ['en', 'es']` and `defaultLocale: 'en'`.
2.  **Update Request Config:**
    - Refactor `src/app/shared/i18n/request.ts` to use the `requestLocale` instead of hardcoded `"es"`.
3.  **Migrate Layout & Pages:**
    - Create `src/app/[locale]/`.
    - Move `src/app/(pages)` and `src/app/layout.tsx` into `src/app/[locale]/`.
    - Update `src/app/[locale]/layout.tsx` to accept `params: { locale: string }`.
    - **CRITICAL:** In `src/app/[locale]/layout.tsx`, fetch `const messages = await getMessages();` and pass it to `<NextIntlClientProvider messages={messages}>`.

### Phase 2: Content Extraction (English)

1.  **Populate `en.json`:**
    - Read `Hero.section.tsx`, `SocialProof.section.tsx`, `Process.section.tsx`, and `FeatureGrid.section.tsx`.
    - Extract all static text into `src/app/shared/messages/en.json`.
2.  **Update Components:**
    - Refactor each section component to `import { useTranslations } from 'next-intl'`.
    - Replace static text with `t('key')`.

### Phase 3: Translation (Spanish)

1.  **Populate `es.json`:**
    - Translate the keys from `en.json` into `src/app/shared/messages/es.json`.

### Phase 4: Cleanup & Verification

1.  **Redirects:** Update or remove `redirects` in `next.config.js` as middleware will handle `/` -> `/en/home`.
2.  **Verification:**
    - Visit `/en/home` -> Should show English.
    - Visit `/es/home` -> Should show Spanish.
    - Verify Client Components (Hero interactions) still work and show translations.

## Testing Strategy

- **Manual Validation:** Switch URL segments manually.
- **Console Check:** Ensure no "Missing message" warnings appear in the browser console.
