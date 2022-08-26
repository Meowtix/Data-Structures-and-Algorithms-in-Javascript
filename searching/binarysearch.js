/**
 * Returns an index of the found element.
 *
 * @param {array} arrray to search in.
 * @param {number} element searching for.
 * @returns {number} index of the found element or null if not found.
 */
export default function binarySearch(array, item) {
    if (!array.length) { return null; }

    let low = 0;
    let high = array.length - 1;
    
    while (low <= high) {
        let mid = parseInt((low + high) / 2);

        let guess = array[mid];

        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}