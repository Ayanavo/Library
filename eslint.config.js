import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        languageOptions: {globals: globals.browser},
        rules: {
            semi: "error",
            "prefer-const": "error",
            "no-unused-vars": "error",
            "no-console": [0],
        },
        linterOptions: {
            reportUnusedDisableDirectives: "error",
        },
    },
    pluginJs.configs.recommended,
];
