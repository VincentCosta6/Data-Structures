class BinaryTree {
    constructor(comparator = null) {
        this.head = null;
        this.comparator = comparator;
    }

    insertNode(node) {
        if(this.head === null) {
            this.head = node;
            return;
        }

        let value = this.comparator(node);
        let currentNode = this.head;
        let lastNode = null;

        let lastLeft = false;

        while(currentNode != null) {
            let nodeValue = this.comparator(currentNode);

            lastNode = currentNode;

            if(value <= nodeValue) {
                currentNode = currentNode.left;
                lastLeft = true;
            }
            else if(value > nodeValue) {
                currentNode = currentNode.right;
            }
        }

        if(lastLeft) {
            lastNode.left = node;
        }
        else {
            lastNode.right = node;
        }
        
    }

    insert(value) {
        this.insertNode(new TreeNode(value));
    }

    get(value) {
        let currentNode = this.head;
        let lastNode = null;

        while(currentNode !== null) {
            let nodeVal = this.comparator(currentNode);

            lastNode = currentNode;

            if(value <= nodeVal) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
        }

        return lastNode;
    }

    remove(value) {
        let currentNode = this.head;
    }
}

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const comp = node => node.value;

let tree = new BinaryTree(comp);

tree.insert(5);

console.log(tree.get(5))

module.exports = BinaryTree;