import binarySearch from "./searching/binarysearch.js";
import linearSearch from "./searching/linearsearch.js";
import bubbleSort from "./sorting/bubblesort.js";
import LinkedList, {Node} from "./data_structures/linkedlist.js";

const array = [0, 1, 2, 3, 5, 7, 8, 12, 14, 16, 17, 22, 29, 34, 45, 57];

console.log('---- binary search ----');
console.log(binarySearch(array, 2));
console.log(binarySearch(array, 21));
console.log(binarySearch(array, 3));
console.log(binarySearch(array, 34));
console.log(binarySearch(array, 22));
console.log(binarySearch(array, 70));
console.log(binarySearch(array, 0));

console.log('---- linear search ----');
console.log(linearSearch(array, 2));
console.log(linearSearch(array, 21));
console.log(linearSearch(array, 3));
console.log(linearSearch(array, 34));
console.log(linearSearch(array, 22));
console.log(linearSearch(array, 70));
console.log(linearSearch(array, 0));

const array2 = Array.from({length: 7}, () => Math.floor(Math.random() * 100)); // creates array of random numbers with value up to 99
const array3 = Array.from({length: 7}, () => Math.floor(Math.random() * 100)); // creates array of random numbers with value up to 99
console.log('---- buble sort 1 ----')
bubbleSort(array2);
array2.forEach((element) => console.log(element));

console.log('---- buble sort 2 ----')
bubbleSort(array3, false);
array3.forEach((element) => console.log(element));

console.log('--- linked list ----')
const node1 = new Node(7);
const node2 = new Node(5);
const node3 = new Node(4);

node2.next = node3;
node1.next = node2;

const list = new LinkedList(node1)
list.print();

console.log(`First item of Linked List is: ${list.getHead().value}`);
console.log(`Last item of Linked List is: ${list.getTail().value}`);
