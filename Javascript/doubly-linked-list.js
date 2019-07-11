class DoublyLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    addNodeAtHead(node) {
        this.size++;

        if(this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    addValueAtHead(value) {
        this.addNodeAtHead(new Node(value));
    }

    addNode(node) {
        this.size++;

        if(this.tail === null) {
            this.tail = node;
            this.head = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    add(value) {
        this.addNode(new Node(value));
    }

    addNodeAtIndex(index, node) {
        let currentNode = this.getNode(index);

        currentNode.prev.next = node;
        node.prev = currentNode.prev;

        currentNode.prev = node;
        node.next = currentNode;

        this.size++;
    }

    addValueAtIndex(index, value) {
        this.addNodeAtIndex(index, new Node(value));
    }

    getNode(index) {
        if(index < 0 || index > this.size - 1) return null;

        if(index === 0) return this.head;
        if(index === this.size - 1) return this.tail;

        let currentNode = null;
        let count = 0;

        if(index < this.size / 2) {
            currentNode = this.head;

            while(count++ !== index) {
                currentNode = currentNode.next;
            }
        }
        else {
            currentNode = this.tail;
            count = this.size - 1;

            while(count-- !== index) {
                currentNode = currentNode.prev;
            }
        }

        return currentNode;
    }

    get(index) {
        if(index < 0 || index > this.size - 1) return null;
        
        return this.getNode(index).value;
    }

    replaceNode(node, index) {
        let replaceNode = this.getNode(index);

        node.prev = replaceNode.prev;
        node.next = replaceNode.next;

        if(replaceNode.prev !== null) replaceNode.prev.next = node;
        if(replaceNode.next !== null) replaceNode.next.prev = node;

        replaceNode.next = null;
        replaceNode.prev = null;

        if(index === 0) this.head = node;
        if(index === this.size - 1) this.tail = node;
    }

    set(value, index) {
        let replaceVal = this.getNode(index);
        replaceVal.value = value;
    }

    removeHead() {
        if(this.head === null) return;

        this.size--;

        if(this.head == this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        let lastHead = this.head;
        this.head = this.head.next;
        lastHead.next = null;
        this.head.prev = null;
    }

    removeTail() {
        if(this.tail === null) return;

        this.size--;

        if(this.tail == this.head) {
            this.tail = null;
            this.head = null;
            return;
        }

        let lastTail = this.tail;
        this.tail = lastTail.prev;
        this.tail.next = null;

        return lastTail;
    }

    removeAtIndex(index) {
        let removeNode = this.getNode(index);

        removeNode.prev.next = removeNode.next;
        removeNode.next.prev = removeNode.prev;

        removeNode.prev = null;
        removeNode.next = null;

        this.size--;
    }

    reverse() {
        let currentNode = this.head;

        while(currentNode !== null) {
            let tempNode = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = tempNode;

            currentNode = tempNode;
        }

        let tempHead = this.head;
        this.head = this.tail;
        this.tail = tempHead;
    }

    reverseCopy() {
        let newList = new DoublyLinkedList();

        let currentNode = this.tail;

        while(currentNode !== null) {
            newList.add(currentNode.value);
            currentNode = currentNode.prev;
        }

        return newList;
    }

    printFromHead() {
        let node = this.head;
        let str = "";

        while(node !== null) {
            str += node.value + "->";
            node = node.next;
        }

        console.log(str);
    }

    printFromTail() {
        let node = this.tail;
        let str = "";

        while(node !== null) {
            str += node.value + "<-";
            node = node.prev;
        }

        console.log(str);
    }
}

class Node {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

let list = new DoublyLinkedList();

list.add(1);
list.add(2);
list.add(3);

list.printFromHead();

//////////////////////////////////////////
list.reverse();

list.printFromHead();

module.exports = DoublyLinkedList;