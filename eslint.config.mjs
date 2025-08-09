import storybook from "eslint-plugin-storybook";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Ignore tests and story files entirely during lint
  {
    ignores: [
      "**/*.test.ts",
      "**/*.test.tsx",
      "**/*.spec.ts",
      "**/*.spec.tsx",
      "**/*.stories.ts",
      "**/*.stories.tsx",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...storybook.configs["flat/recommended"],
  // Relax rules specifically in tests and stories
  {
    files: ["**/*.test.*", "**/*.spec.*"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    files: ["**/*.stories.*"],
    rules: {
      "storybook/no-renderer-packages": "off",
    },
  },
];

export default eslintConfig;
