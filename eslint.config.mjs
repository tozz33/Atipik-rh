import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
    globalIgnores([".next/**", "node_modules/**", "out/**"]),
    ...nextCoreWebVitals,
    {
        rules: {
            "react/no-unescaped-entities": "off",
            "react-hooks/exhaustive-deps": "warn",
            "react-hooks/set-state-in-effect": "warn",
            "@next/next/no-html-link-for-pages": "off",
        },
    },
]);