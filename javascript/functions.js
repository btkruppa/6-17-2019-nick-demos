// in JavaScript you can create Functions as "first class citizens"
// you can use function keyword or es6 arrow notation to create functions

function add(one, two) {
  return one + two;
}

let arrowAdd = (one, two) => {
  return one + two;
}

console.log(`add(5, 7) = ${add(5, 7)}
arrowAdd('s', 7) = ${arrowAdd('s', 7)}
add() = ${add()}`);