let list = require("./singly-linked-list");

class Stack {
    constructor() {
        this.list = new list();
    }

    add(value) {
        this.list.addAtHead(value);
    }

    pop() {
        return this.list.removeHead();
    }

    peek() {
        return this.list.head;
    }

    isEmpty() {
        return this.list.size === 0;
    }
} 

module.exports = Stack;