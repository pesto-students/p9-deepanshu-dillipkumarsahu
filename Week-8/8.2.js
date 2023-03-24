class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  leftShift(k) {
    if (k === 0 || k === this.size) {
      return;
    }

    let current = this.head;
    let count = 1;

    while (count < k && current) {
      current = current.next;
      count++;
    }

    if (!current) {
      return;
    }

    const kthNode = current;

    while (current.next) {
      current = current.next;
    }

    current.next = this.head;
    this.head = kthNode.next;
    kthNode.next = null;
  }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
console.log(list);

list.leftShift(2);
console.log("Result->", JSON.stringify(list));
