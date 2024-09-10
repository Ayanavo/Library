//randomBy
String.prototype.randomBy = function () {
    let randomString = "";

    for (let i = 0; i < getLength(this); i++) {
        const randomValue = Math.random() * this.length;
        randomString += String.fromCharCode(65 + randomValue);
    }
    // for (let i = 0; i < this.length; i++) {
    // const randomIndex = Math.floor(Math.random() * this.length);
    // }
    // return array[randomIndex];
    console.log(PossibleValues(this));

    return randomString;
};

function getLength(regex) {
    const pattern = regex.toString().slice(1, -1);
    console.log(pattern);

    let length = 0;
    const matches = pattern.match(/(\[.*?\])(\{\d+,\d+\}|\{\d+\}|\+|\*|\?)?/g) || [];

    for (const match of matches) {
        const [, , quantifier] = match.match(/(\[.*?\])(\{\d+,\d+\}|\{\d+\}|\+|\*|\?)?/) || [];

        if (quantifier) {
            if (quantifier.startsWith("{"))
                length += +quantifier.match(/\d+/)[0]; // {n} or {n,m}
            else if (quantifier === "+") length += 1; // +
        } else {
            length += 1; // Single character class without quantifier
        }
    }

    return length;
}

function PossibleValues(regex) {
    const pattern = regex.toString().slice(1, -1);
    const matches = [...pattern.matchAll(/\[(.*?)\](\{\d+\})?/g)];
    let results = [""];

    const expandRange = (range) =>
        range
            .replace(/([A-Z])-([A-Z])/g, (_, a, z) => {
                return String.fromCharCode(...Array.from({length: z.charCodeAt(0) - a.charCodeAt(0) + 1}, (_, i) => a.charCodeAt(0) + i));
            })
            .split("");

    // eslint-disable-next-line no-unused-vars
    matches.forEach(([_, charClass, quantifier]) => {
        const expandedChars = expandRange(charClass);
        const repeat = quantifier ? +quantifier.match(/\d+/)[0] : 1;
        results = Array.from({length: repeat}, () => results).flatMap((res) => res.flatMap((prefix) => expandedChars.map((char) => prefix + char)));
    });

    return results;
}
