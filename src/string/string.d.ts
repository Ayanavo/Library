interface String {
    constructor: Function;
    /**
     * Converts the given string to camelcase.
     */
    toCamelCase(): string;

    /**
     * Converts the given string to snake_case.
     */
    toSnakeCase(): string;

    /**
     * Converts the given string to PascalCase.
     */
    toPascalCase(): string;

    /**
     * Converts the given string to kebab-case.
     */
    toKebabCase(): string;

    /**
     * Converts the given string to Title Case.
     */
    toTitleCase(): string;
}
