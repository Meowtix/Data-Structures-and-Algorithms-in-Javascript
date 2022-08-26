export class Node {
    /**
     * Node of the Linked list
     * contains a value and a pointer to the next node 
     * @constructor
     */
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

export default class LinkedList {
    /**
     * Linked list
     * contains the head of the list
     * and every next node
     * @constructor
     */
    constructor(head = null) {
        this.head = head;
    }

    /**
     * Returns size of a linked list
     * 
     * @returns (number) size of linked list
     */
    size() {
        let count = 0;
        let node = this.head;
        while(node) { 
            count++;
            node = node.next;
        }
        return count;
    }

    /**
     * Empties the linked list
     */
    clear() { this.head = null; }

    /**
     * Returns the last node of the list
     * 
     * @returns last node of the list
     */
    getTail() {
        let last = this.head;

        if (!last) { return null; }
        while(last.next) {
            last = last.next;
        }

        return last;
    }

    /**
     * Returns the first node of the list
     * 
     * @returns first node of the list
     */
    getHead() { return this.head };

    /**
     * Prints out all the linked list elements
     */
    print() {
        let current = this.head;

        while (current) {
            console.log(current.value)
            current = current.next;
        }
    }
}