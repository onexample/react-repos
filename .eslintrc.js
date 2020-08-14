module.exports = {
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended", // should be always last
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2020,
        // Allows for the use of imports
        sourceType: "module",
        ecmaFeatures: {
            // Allows for the parsing of JSX
            jsx: true,
        },
    },
    plugins: ["react", "@typescript-eslint/eslint-plugin"],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/prop-types": "off",
    },
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use
            version: "detect",
        },
    },
};
