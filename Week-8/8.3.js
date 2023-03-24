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
        this.size++;
      }
    }
  }

  get() {
    return {
      linkedlist: this.head,
      size: this.size,
    };
  }

  hasLoop() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      console.log(slow);
      console.log(fast);
      console.log("------------------------------------------------");
      if (slow === fast) {
        return true;
      }
    }

    return false;
  }
}

const linkedlist = new LinkedList();
linkedlist.append([1, 2, 3, 4, 5, 6, 7]);
linkedlist.get().linkedlist.next.next.next.next.next.next.next =
  linkedlist.get().linkedlist.next.next;
console.log(linkedlist.hasLoop());
