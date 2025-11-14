// Import FlatCompat
import { FlatCompat } from "@eslint/eslintrc";
import { globalIgnores } from "eslint-plugin-package-json/configs";

// Create compat instance
const compat = new FlatCompat();

export default [
  // Add ignores (replacement for .eslintignore)
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "public/**",
      "scripts/**",
      "pages/api/**",
      "next-env.d.ts",
    ],
  },

  // Extend next/core-web-vitals and next/typescript
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Your custom rules
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },

  // Your global ignores
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
];
