interface Array<T> {
    constructor: Function;
    /**
     * Returns the highest numeric value from the given numeric array.
     * @param array An array of numbers
     */
    max(): number;

    /**
     * Returns the lowest numeric value from the given numeric array.
     * @param array An array of numbers
     */
    min(): number;

    /**
     * Returns the average of all the numbers in the given array.
     * @param array An array of numbers
     * @param predicate A function that accepts a numeric. The avj method calls
     * the predicate function on the result before returing the value.
     */
    avj(predicate?: () => number): number;

    /**
     * Returns the sum of all the numbers in the given array.
     * @param array An array of numbers
     * @param predicate A function that accepts a numeric. The sum method calls
     * the predicate function on the result before returing the value.
     */
    sum(predicate?: () => number): number;

    /**
     * Returns a new array containing the unique elements from the given array.
     * @param array An array of elements
     */
    unique(): T[];

    /**
     * Determines whether all the members of an array are equal to the given array.
     * @param array An array of elements to match with the given array.
     */
    equal(array: Array<T>): boolean;

    /**
     * Determines whether all the members of an array are present to the given array.
     * @param array An array of elements
     */

    exclusive(array: Array<T>): boolean;

    /**
     * Returns a new array containing the elements from the given array between two indices.
     * @param start A start index
     * @param end A end index
     */

    inbetween(start: number, end?: number): T[];

    /**
     * Determines whether the given array is empty.
     */
    empty(): boolean;

    /**
     * Returns an object containing values from the given array in keys that are generated from the given function.
     * The order of grouped values is determined by the order they occur in the given array.
     * @param predicate A function that accepts three arguments. Groups elements from the array under the same key that satisifes the function.
     */
    groupby(predicate: (value: T, index: number, array: T[]) => unknown): {[idx: string]: T[]};
}
