let linkedList = require("./doubly-linked-list");

class Queue {
    constructor() {
        this.list = new linkedList();
    }

    add(value) {
        this.list.addValueAtHead(value);
    }

    remove() {
        return this.list.removeTail();
    }

    query() {
        return this.list.tail;
    }

    isEmpty() {
        return this.list.size === 0;
    }
}

module.exports = Queue;