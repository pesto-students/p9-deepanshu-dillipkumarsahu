function createStack() {
  let items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      // items.pop() will return the last item for the array
      return items.pop();
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.push(3);
console.log(stack.pop()); // it will retun 3
console.log(stack.items); // It will not return an [] because createStack() not returning items in it's object
