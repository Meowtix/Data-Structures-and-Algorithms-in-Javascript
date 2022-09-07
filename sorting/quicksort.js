/**
 * 
 * @param {array} array to sort
 * @param {int} first item
 * @param {int} last item 
 */
export default function quickSort(array, low, high) {
    if (low < high) {
        let pivot = partition(array, low, high);
        quickSort(array, low, pivot - 1);
        quickSort(array, pivot + 1, high);
    }
}

/**
 * 
 * @param {array} array to sort
 * @param {int} first item of array
 * @param {int} last item of array 
 */
function partition (array, low, high) {
    const pivotValue = array[low]
    let swapIndex = low;
    for (let i = low + 1; i <= high; i++) {
      if (pivotValue > array[i]) {
        swapIndex++
        if (i !== swapIndex) {
          ;[array[i], array[swapIndex]] = [array[swapIndex], array[i]]
        }
      }
    }
    if (swapIndex !== low) {
      // Swap pivot into correct place
      ;[array[swapIndex], array[low]] = [array[low], array[swapIndex]]
    }
    return swapIndex
}