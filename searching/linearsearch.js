/**
 * 
 * @param {array} array 
 * @param {number} item 
 * @returns the item we're searching or null if it's not there
 */
export default function linearSearch(array, item) {
    for (const i in array) {
        if (array[i] === item) {
            return i;
        }
    }

    return null;
}