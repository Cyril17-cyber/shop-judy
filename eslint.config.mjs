import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

const eslintConfig = [
  {
    // Replaces `.eslintignore`
    ignores: [
      "node_modules/",
      ".next/",
      "build/",
      "public/",
      "scripts/",
      "pages/api/",
    ],
  },

  // Keep your existing config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      "no-console": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];

export default eslintConfig;
