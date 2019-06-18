// in JavaScript you can use ', ", or ` to create strings

let a = 'hello';
a = "world";
a = `hello world`;

// ` - back tic - also known as template literals were introduced in ES6
// template literals allow for muli line strings, as well as string interpolation
let b = 5;
let c = true;

a = `this is a template literal
it can be muli line
and also allows for string interpolation
b = ${b}
5 + 10 = ${5 + 10}
inside of the $ and brackets you can put whatever JS code you want`;
console.log(a);