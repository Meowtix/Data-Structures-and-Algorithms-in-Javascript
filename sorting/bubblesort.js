/**
 * Sorts the array.
 *
 * @param {array} array to sort.
 * @param {boolean} tells whether to sort ascending or descending.
 */
export default function bubbleSort(array, ascending = true) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (ascending) {
                if (array[i] > array[j]) {
                    [array[i], array[j]] = [array[j], array[i]];
                }
            } else {
                if (array[i] < array[j]) {                   
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
        }
    }
}