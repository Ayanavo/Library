//findKey
Object.prototype.findKey = function () {
    for (const key in this) {
        if (this[key] === arguments[0]) {
            return {[key]: this[key]};
        }
    }

    return null;
};
