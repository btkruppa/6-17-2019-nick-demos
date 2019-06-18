// JS has global, function, and sometimes block scope
// let and const do have block scope, var does not
function fun() {
  console.log(b);
  // var keyword varaibles have their declaration hoisted to the top of it's scope
  // mean var is only global or function scope, has no block scope`
  if(true) {
    var b = 5;
    let c = 10;
    // location = 'http://google.com'; // if you use a variable without declaring it, it will get attached to the global window object
  }
  console.log(b); // var is fine
  // console.log(c); // this will break
  // console.log(d);
}

fun();