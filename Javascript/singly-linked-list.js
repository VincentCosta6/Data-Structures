class SinglyLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    addNode(node) {
        this.size++;

        if(this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    add(value) {
        this.addNode(new Node(value));
    }

    addNodeAtHead(node) {
        this.size++;

        if(this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }

    addAtHead(value) {
        this.addNodeAtHead(new Node(value));
    }

    addNodeAt(node, index) {
        if(index < 0 || index > this.size) return;

        if(index === 0) return this.addNodeAtHead(node);
        if(index === this.size - 1) return this.addNode(node);

        let currentNode = this.head;
        let lastNode = null;
        let count = 0;

        while(count++ !== index) {
            lastNode = currentNode;
            currentNode = currentNode.next;
        }

        lastNode.next = node;
        node.next = currentNode;

        this.size++;
    }

    addAt(value, index) {
        this.addNodeAt(new Node(value, index));
    }

    getNode(index) {
        if(index < 0 || index > this.size - 1) return;

        if(index === 0) return this.head;
        if(index === this.size - 1) return this.tail;

        let currentNode = this.head;
        let count = 0;

        while(count++ !== index) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    get(index) {
        return this.getNode(index).value;
    }

    setNode(node, index) {
        if(index < 0 || index > this.size - 1) return;

        if(index === 0) {
            node.next = this.head.next;
            this.head = node;
            return;
        }
        
        let currentNode = this.head;
        let lastNode = null;
        let count = 0;

        while(count++ !== index) {
            lastNode = currentNode;
            currentNode = currentNode.next;
        }

        lastNode.next = node;
        node.next = currentNode.next;

        if(index === this.size - 1) return this.tail = node;
    }

    set(value, index) {
        this.setNode(new Node(value), index);
    }

    removeHead() {
        let tempHead = this.head;
        this.head = this.head.next;

        this.size--;

        return tempHead;
    }

    removeTail() {
        let currentNode = this.head;
        let lastNode = null;

        while(currentNode != this.tail) {
            lastNode = currentNode;
            currentNode = currentNode.next;
        }

        let tempTail = this.tail;
        lastNode.next = null;
        this.tail = lastNode;

        return tempTail;
    }

    removeNode(node) {
        let currentNode = this.head();
    }

    remove(index) {
        if(index < 0 || index > this.size - 1) return;

        if(index === 0) return this.removeHead();

        let currentNode = this.head;
        let lastNode = null;
        let count = 0;

        while(count++ !== index) {
            lastNode = currentNode;
            currentNode = currentNode.next;
        }

        lastNode.next = currentNode.next;

        if(index === this.size - 1) this.tail = lastNode;

        return currentNode;
    }

    reverse() {
        let currentNode = this.head;
        let lastNode = null;

        this.tail = this.head;

        while(currentNode !== null) {
            let tempCurrent = currentNode.next;

            currentNode.next = lastNode;

            lastNode = currentNode;
            currentNode = tempCurrent;
        }

        this.head = lastNode;
    }

    reverseCopy() {
        let newList = new SinglyLinkedList();
        
        let currentNode = this.head;

        while(currentNode !== null) {
            newList.addAtHead(currentNode.value);

            currentNode = currentNode.next;
        }

        return newList;
    }

    print() {
        let node = this.head;
        let str = "";

        while(node != null) {
            str += node.value + "->";
            node = node.next;
        }

        console.log(str);
    }
}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

let list = new SinglyLinkedList();

list.add(1);
list.add(2);
list.add(3);

list.print();

let lister = list.reverseCopy();

lister.print();

module.exports = SinglyLinkedList;