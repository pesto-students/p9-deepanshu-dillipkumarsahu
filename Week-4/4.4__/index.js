/**
 * Given array 
 * array = [
    { Id: "001", qty: 1 },
    { Id: "002", qty: 2 },
    { Id: "001", qty: 2 },
    { Id: "003", qty: 4 }
    ];

    O/P - 
    array = [
    { Id: "001", qty: 3 },
    { Id: "002", qty: 2 },
    { Id: "003", qty: 4 }
    ];
 **/

const array = [
  { Id: "001", qty: 1 },
  { Id: "002", qty: 2 },
  { Id: "001", qty: 2 },
  { Id: "003", qty: 4 },
];

const updated_array = [];

array.forEach((item) => {
  if (updated_array.filter((e) => e.Id === item.Id).length < 1) {
    updated_array.push(item);
  } else {
    const index = updated_array.findIndex((e) => e.Id === item.Id);
    if (index !== -1) {
      updated_array[index].qty += item.qty;
    }
  }
});

console.log(updated_array);
