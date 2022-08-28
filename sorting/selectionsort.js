import { swap } from "../helpers/helpers.js";

/**
 * Sorts the array
 * 
 * @param {array} array to sort
 * @param {boolean} tells whether it should be sorted in ascending or descending 
 * @returns None
 */
export default function selectionSort(array, ascending = true) {
    if (array.length === 0) { return; }

    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (ascending) {
                if (array[j] < array[min]) { min = j; }
            } else {
                if (array[j] > array[min]) { min = j; }
            }   
        }
        
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
}