class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(array) {
    if (Array.isArray(array)) {
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const node = new Node(element, this.head);
        this.head = node;
      }
    } else {
      console.log("please give an array");
    }
  }

  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current != null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous; // Set the new head to the last node visited
  }

  get() {
    return this.head;
  }
}

const linkedlist = new LinkedList();
linkedlist.append([1, 2, 3, 4, 5, 6, 7]);
linkedlist.reverse();
console.log(linkedlist.get());
