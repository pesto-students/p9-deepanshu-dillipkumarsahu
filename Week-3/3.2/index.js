// call
function greeting(name) {
  return `Hello, ${name}!`;
}
const call_result = greeting.call(null, "Dillip");
console.log("call->", call_result);

// bind
const person = {
  name: "Dillip",
  greet: function () {
    return `Hello, My name is ${this.name}!`;
  },
};

let bindResult = person.greet.bind(person);
console.log("bind->", bindResult());

// apply
function sum(a, b) {
  return a + b;
}

const apply_result = sum.apply(null, [1, 2]);
console.log("apply->", apply_result);
