import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";
import boundaries from "eslint-plugin-boundaries";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
  {
    ignores: [".next"],
  },
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    plugins: {
      boundaries,
    },
    settings: {
      "boundaries/include": ["src/**/*"],
      "boundaries/elements": [
        {
          type: "feature",
          pattern: "src/app/features/*",
          capture: ["featureName"],
        },
        {
          type: "shared",
          pattern: "src/app/shared/*",
          capture: ["sharedModule"],
        },
        {
          type: "server",
          pattern: "src/server",
          mode: "folder",
        },
        {
          type: "app",
          pattern: "src/app",
          mode: "folder",
        },
        {
          type: "trpc",
          pattern: "src/trpc",
          mode: "folder",
        },
        {
          type: "env",
          pattern: "src/env.js",
          mode: "full",
        },
      ],
    },
    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "boundaries/no-unknown": ["error"],
      "boundaries/element-types": [
        "error",
        {
          default: "allow",
          rules: [
            {
              from: ["shared"],
              disallow: ["feature", "app", "server"],
              message:
                "Shared code should not import from features, app, or server.",
            },
            {
              from: ["feature"],
              disallow: [
                ["feature", { featureName: "!${featureName}" }],
                "app",
              ],
              message:
                "Features should not import from other features or app pages.",
            },
            {
              from: ["server"],
              disallow: ["feature", "app"],
              message:
                "Server code should not import from client features or app pages.",
            },
            {
              from: ["app", "feature", "server", "shared"],
              allow: ["trpc", "env"],
            },
          ],
        },
      ],
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
);
