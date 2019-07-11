class LRUCache {
    public HashMap<Integer, Node> map;
    public final DoubleList recents;
    public final int capacity;

    public LRUCache(int capacity) {
        this.map = new HashMap<Integer, Node>();
        this.recents = new DoubleList();
        this.capacity = capacity;
    }

    public int get(int key) {
        Node node = this.map.get(key);

        if(node != null) {
            this.recents.moveToFront(node);
            return node.value;
        }

        return -1;
    }

    public void put(int key, int value) {
        Node node = this.map.get(key);

        if(node != null) {
            node.value = value;
            this.recents.moveToFront(node);
            return;
        }

        node = this.recents.addToFront(key, value);

        // If recents is oversized, remove from recents and remove from map
        if(this.recents.size > this.capacity) {
            Node tail = this.recents.removeTail();

            this.map.remove(tail.key);
        }

        this.map.put(key, node);
    }
}

class DoubleList {
    public Node head, tail;
    public int size = 0;

    public Node addToFront(int key, int value) {
        Node node = new Node(key, value, null, null);

        if(this.head == null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.size++;

        return node;
    }

    public void moveToFront(Node node) {
        if(this.head == null) return;

        if(node == this.head) return;

        if(node == this.tail) this.tail = node.prev;

        if(node.prev != null) node.prev.next = node.next;

        if(node.next != null) node.next.prev = node.prev;

        this.head.prev = node;
        node.next = this.head;
        node.prev = null;
        this.head = node;
    }

    public Node removeTail() {
        if(this.tail == null) return null;

        if(this.tail == this.head) this.head = null;

        this.tail.prev.next = null;
        Node temp = this.tail;
        this.tail = this.tail.prev;

        this.size--;

        return temp;
    }
}

class Node {
    public int key, value;
    public Node prev, next;

    public Node(int key, int value, Node prev, Node next) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}