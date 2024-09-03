//camelcase

String.prototype.toCamelCase = function () {
    const words = this.split(/[^a-zA-Z0-9]/);
    if (words.length === 0) return "";
    let str = words[0];
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
            str += word[0].toUpperCase() + word.slice(1);
        }
    }
    return str;
};

//kebabcase

String.prototype.toKebabCase = function () {
    const words = this.split(/[^a-zA-Z0-9]/);
    if (words.length === 0) return "";
    let str = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
            str += "-" + word.toLowerCase();
        }
    }
    return str;
};

//snakecase

String.prototype.toSnakeCase = function () {
    const words = this.split(/[^a-zA-Z0-9]/);
    if (words.length === 0) return "";
    let str = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
            str += "_" + word.toLowerCase();
        }
    }
    return str;
};

//pascalcase

String.prototype.toPascalCase = function () {
    const words = this.split(/[^a-zA-Z0-9]/);
    if (words.length === 0) return "";
    let str = words[0].toUpperCase();
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
            str += word[0].toUpperCase() + word.slice(1);
        }
    }
    return str;
};

//titlecase

String.prototype.toTitleCase = function () {
    const words = this.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
            words[i] = word[0].toUpperCase() + word.slice(1);
        }
    }
    return words.join(" ");
};
