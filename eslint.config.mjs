import js from "@eslint/js";

export default [
    {
        ignores: ["node_modules/**", "dist/**"],
    },
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        ...js.configs.recommended,
        rules: {
            "no-unused-vars": "off",
            "no-undef": "off",
        },
    },
];
