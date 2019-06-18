let arr = [
  5,
  {
    name: 'blake'
  },
  'hello',
  [5, 2, 18],
  false,
  25,
  32,
  18
];

arr.push('new element');
arr.unshift('add to front of array')
console.log(arr);
console.log(arr[100]);

// the filter function will iterate through for all elements and invoke the callback
// if the callback returns true for an element it keeps it, if not that element is
// removed from the newly created array
let filtered = arr.filter(ele => {
  if(typeof(ele) === 'number') {
    return true;
  } else {
    return false;
  }
});

console.log(arr);
console.log(filtered);


arr.forEach((each, index) => {
  console.log(`index: ${index} value: ${each}`);
});