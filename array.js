//max
Array.prototype.max = function () {
    let accumulator = this[0];
    array_error(this);
    for (let i = 0; i < this.length; i++) {
        if (this[i] > accumulator) {
            accumulator = this[i];
        }
    }
    return accumulator;
};

//min
Array.prototype.min = function () {
    let accumulator = this[0];
    array_error(this);
    for (let i = 0; i < this.length; i++) {
        if (this[i] < accumulator) {
            accumulator = this[i];
        }
    }
    return accumulator;
};

//avj
Array.prototype.avj = function (callback = (x) => x) {
    array_error(this);
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return callback(sum / this.length);
};

//sum
Array.prototype.sum = function (callback = (x) => x) {
    array_error(this);
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return callback(sum);
};

//equal
Array.prototype.equal = function (arr) {
    array_error(this);
    array_error(arr);
    for (let i = 0; i < arr.length; i++) {
        if (this[i] !== arr[i]) {
            return false;
        }
    }
    return true;
};

//intersection
// Array.prototype.intersection = function (arr) {
//     let temparr = [];
//     array_error(this);
//     array_error(arr);
//     for (let i = 0; i < this.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//              if (this[i] === arr[j] && !includes(temparr, this[i])) {
//             temparr[temparr.length] = this[i];
//              }
//         }
//     }
//     return temparr;
// };

Array.prototype.union = function (arr) {
    const temparr = [];
    array_error(this);
    array_error(arr);
    for (let i = 0; i < this.length; i++) {
        temparr[temparr.length] = this[i];
    }
    // for (let i = 0; i < arr.length; i++) {
    //     if (!includes(temparr, arr[i])) {
    //         temparr[temparr.length] = arr[i];
    //     }
    // }
    return temparr;
};

//exclusive
Array.prototype.exclusive = function (arr) {
    array_error(this);
    array_error(arr);
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (this[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
};

//in between
Array.prototype.inbetween = function (start, end) {
    const temparr = [];
    array_error(this);
    end ??= this.max();
    if (start >= end) {
        return temparr;
    }
    for (let i = 0; i < this.length; i++) {
        if (this[i] > start && this[i] <= end) {
            temparr[temparr.length] = this[i];
        }
    }

    return temparr;
};

//unique
Array.prototype.unique = function () {
    const temparr = [];
    for (let i = 0; i < this.length; i++) {
        let unique = true;
        for (let j = 0; j < temparr.length; j++) {
            if (temparr[j] === this[i]) {
                unique = false;
                break;
            }
        }

        if (unique) temparr[temparr.length] = this[i];
    }

    return temparr;
};

//empty
Array.prototype.empty = function () {
    return this.length === 0;
};

//group by
Array.prototype.groupby = function (callback) {
    const tempobj = {};
    array_error(this);
    for (let i = 0; i < this.length; i++) {
        const k = callback(this[i]);
        if (!tempobj[k]) {
            tempobj[k] = [];
        }
        tempobj[k][tempobj[k].length] = this[i];
    }
    return tempobj;
};

//chunk
Array.prototype.chunk = function (size) {
    array_error(this);
    const temparr = [];
    for (let i = 0; i < this.length; i += size) {
        const subarr = [];
        for (let j = 0; j < size; j++) {
            subarr[subarr.length] = this[j];
        }
        temparr[temparr.length] = subarr;
    }
    return temparr;
};

//compact
Array.prototype.compact = function () {
    array_error(this);
    const temparr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i]) {
            temparr[temparr.length] = this[i];
        }
    }
    return temparr;
};

//zip
Array.prototype.zip = function (...arr) {
    array_error(this);
    array_error(arr);
    console.log(arr);
    const temparr = [];
    const length = this.length >= arr.length ? this.length : arr.length;
    for (let i = 0; i < length; i++) {
        temparr[temparr.length] = [this[i], arr[i]];
    }
    return temparr;
};

//frompair
// Array.prototype.fromPair = function () {
// 	array_error(this);
// 	let tempobj = {};
// 	for (let i = 0; i < this.length; i++) {
// 		tempobj[i] = this[i];
// 	}
// 	return tempobj;
// };

function array_error(arr) {
    if (Object.prototype.toString.call(arr) !== "[object Array]") {
        throw new Error("Value must be an array");
    }
}

// module.exports = {
//   sort: sort,
//   indexOf: indexOf,
//   lastIndexOf: lastIndexOf,
//   includes: includes,
//   shift: shift,
//   unshift: unshift,
//   splice: splice,
//   slice: slice,
//   push: push,
//   fill: fill,
//   map: map,
//   filter: filter,
//   find: find,
//   findIndex: findIndex,
//   pop: pop,
//   concat: concat,
//   reduce: reduce,
//   some: some,
//   every: every,
//   max: max,
//   min: min,
//   avj: avj,
//   flatten: flatten,
//   equal: equal,
//   intersection: intersection,
//   union: union,
//   exclusive: exclusive,
// };
