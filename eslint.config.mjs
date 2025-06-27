const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-console": "off", // disable console warnings
      "react/react-in-jsx-scope": "off", // just as an example
    },
  },
];
