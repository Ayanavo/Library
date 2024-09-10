//camelcase

String.prototype.toCamelCase = function () {
    return this.split(/[^a-zA-Z0-9]+/)
        .filter((word) => word.length > 0)
        .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
        .join("");
};

//kebabcase

String.prototype.toKebabCase = function () {
    return this.split(/[^a-zA-Z0-9]+/)
        .filter((word) => word.length > 0)
        .map((word) => word.toLowerCase())
        .join("-");
};

//snakecase

String.prototype.toSnakeCase = function () {
    return this.split(/[^a-zA-Z0-9]+/)
        .filter((word) => word.length > 0)
        .map((word) => word.toLowerCase())
        .join("_");
};

//pascalcase

String.prototype.toPascalCase = function () {
    const words = this.split(/[^a-zA-Z0-9]/);
    return words
        .filter((word) => word.length > 0)
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join("");
};

//titlecase

String.prototype.toTitleCase = function () {
    return this.toLowerCase()
        .split(" ")
        .map((word) => (word.length > 0 ? word[0].toUpperCase() + word.slice(1) : ""))
        .join(" ");
};
